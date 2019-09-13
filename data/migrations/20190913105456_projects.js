exports.up = function(knex) {
    return knex.schema
        .createTable("projects", tbl => {
            tbl.increments();
            tbl.string("project_name").notNullable();
            tbl.string("project_description");
            tbl
                .boolean("completed")
                .notNullable()
                .defaultTo(0);
        })
    
        .createTable("tasks", tbl => {
            tbl.increments();
            tbl.string("task_decription").notNullable();
            tbl.string('task_notes');
            tbl.boolean("completed").notNullable().defaultTo(0);
            tbl
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        })
    
        .createTable("resources", tbl => {
            tbl.increments();
            tbl.string("resource_name").notNullable().unique();
            tbl.string("resource_description");
        })
    
        .createTable("projects_resources", tbl => {
            tbl.increments();
            tbl
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("projects")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
            tbl
                .integer("resource_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recources")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        });
};
  
exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("projects_resources")
      .dropTableIfExists("resources")
      .dropTableIfExists("tasks")
      .dropTableIfExists("projects");
};
