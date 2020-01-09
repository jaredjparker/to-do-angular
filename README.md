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
