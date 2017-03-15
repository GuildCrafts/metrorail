# MetroRail

Modeling a city transit system.

This particular city has a simple transit system: just one circular train line with 12 stations and 4 trains.

Base repository for the MetroRail goals:

- [Data Modeling & Database Design](http://jsdev.learnersguild.org/goals/126)
- [Web API Design, Building, and Documentation](http://jsdev.learnersguild.org/goals/127)

## Team Members

@jamestewartjr
@jhallman5

## Learners Guild Team Name

violet-gulls

## Installation and Setup

To install dependencies, type the following command in your terminal:
``` npm install ```

If you have PostgreSQL, create database by using command:
``` npm run db:create ```

Run this command to create your table migrations:
``` npm run db:migrate ```

Seed your database with test data:
``` npm run db:seed ```

To drop your database use command:
``` npm run db:drop ```

To reset your database by dropping, creating and seeding your database, use:
``` npm run db:reset ```

To load the REPL use:
``` npm run repl ```

To run quieres from the console, use:
``` npm run console ```
## Usage and Examples

## Example

``` const station = require('./models/station.js')
    const passenger = require('/models/passenger.js')

    //create a passenger Julia with parameters (name, destination, currentLocation, currentTrain)

    createNewPassenger(Julia, 'Downtown', 'Waterfront', 2)

    //new passenger Julia created! 
