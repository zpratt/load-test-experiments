package io.modzed.loadtest.app.controllers

import io.modzed.loadtest.app.domain.Pizza
import io.modzed.loadtest.app.repositories.PizzaRepository
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class Hello(val pizzaRepository: PizzaRepository) {

    @RequestMapping("/hello")
    fun hello() = object {
        val hello: String = "world"
    }

    @RequestMapping("/pizzas")
    fun pizzas(): List<Pizza> {
       return pizzaRepository.findByDescription()
    }
}