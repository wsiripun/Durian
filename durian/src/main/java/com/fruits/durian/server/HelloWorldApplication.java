package com.fruits.durian.server;
 
import java.util.HashSet;
import java.util.Set;
import javax.ws.rs.core.Application;
 

 
public class HelloWorldApplication extends Application
{
    private Set<Object> singletons = new HashSet();
    private Set<Class<?>> empty = new HashSet();
 
    public HelloWorldApplication() {
        // ADD YOUR RESTFUL RESOURCES HERE
        this.singletons.add(new HelloWorld());
        this.singletons.add(new LoginServlet());
//        this.singletons.add(new Reservation());
    }
 
    public Set<Class<?>> getClasses()
    {
        return this.empty;
    }
 
    public Set<Object> getSingletons()
    {
        return this.singletons;
    }
}