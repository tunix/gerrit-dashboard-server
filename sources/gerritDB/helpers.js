"use strict";

exports.injectExcludedProjectsIntoSql = function(excludedProjects) {
    var sql = ``;

    if (!excludedProjects) {
        return sql;
    }

    excludedProjects.forEach(function(project, i) {
        if (i === 0) {
            sql += `
                WHERE Project NOT LIKE '%${project}%'
            `;
        } else {
            sql += `
                    AND Project NOT LIKE '%${project}%'
            `;
        }
    });

    return sql;
}
