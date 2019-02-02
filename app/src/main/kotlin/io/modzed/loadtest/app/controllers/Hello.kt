package io.modzed.loadtest.app.controllers

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class Hello {

    @RequestMapping("/hello")
    fun hello() = object {
        val hello: String = "world"
    }
}