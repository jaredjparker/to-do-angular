To Do App for the Angular Mentoring Group

Enums are good to use when you have
    static (not dynamic at runtime) discrete values
    possible values are 2 or more
    can only be one of the possible values at any given time (North, South, East, West)
    enum example:
        enum Direction {
            North, // Value is 0
            South, // Value is 1
            East, // Value is 2
            West // Value is 3
        }

    best practices for frontend

    enum DirectionBest {
        North = 'North', // Can also set the value to a number, but it is best as string
        South = 'South',
        East = 'East',
        West = 'West'
    }

Component is about behavior.  Is the behavior already covered by native HTML?

What is a UI Component? - It is a HTML custom element or enhanced HTML element

Eager Loading -> Things are loaded before they are needed. Usually load everything upfront.

Lazy Loading -> Load things on demand

Code Splitting ->  We need to use code splitting to be able to Lazy Load.  Module bundlers perform code splitting, but we need to instruct the Module bundlers to complete this. 
    Entrypoint -> (initial file that loads other things)  In our case we use WebPack -> for code splitting.
    Multiple files, ideally each file covers one domain (or one feature).
    UI -> think about screens

Module bundlers -> Webpack is a module bundler.

Module loaders -> Requirejs is a module loader.


Why MVC doesn't work?

-> At least for UI... architectures

Models (component classes)
Views (all html)



Modules -> AppModule

We can create other modules.

-> group screens by domain or feature

One feature -> one module

Feature modules
    notes/
        components/
            new-note/new-note-component(ts/scss/html)
        containers/
            notes/
        services/
            note-service.ts
        notes-module.ts -> module definition:
            It is in charge of registering all components, services.
            it imports other modules it depends on
            it registers routes (usually through separarte module or manifest)



Deletable Feature
    Code splitting is easy
    We can lazy load!

    fast to render!

    When we delete something it's gone.

    this works great with growing teams!!
    Each team (squads) will work on a feature -> a feature module.

    Things are easy to discover! (Everything is together in the module/folder structure)