package io.modzed.loadtest.app.repositories

import io.modzed.loadtest.app.domain.Pizza
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Repository

@Repository
class PizzaRepository(val jdbcTemplate: JdbcTemplate) {
    val rowMapper = RowMapper { rs, _ ->
        Pizza(rs.getInt("pizza_id") as Integer, rs.getString("description"))
    }

    fun findByDescription(): List<Pizza> {
        return jdbcTemplate.query("select pizza_id, description from pizza.pizza;", rowMapper)
    }
}
