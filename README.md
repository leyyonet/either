# Leyyo: Either
> `Either` is an object that represents a choice between two possible objects of potentially two different types. One common use for something
> like this is to wrap the execution of a function that can throw an exception such that the exception is bound into an
> *Either > Result,Exception* and thereby remove the need to a try...catch block.

## Import
- `npm i @leyyo/either`

## Blueprint

#### Items
| Type        | Name                                                         | FQN | Description |
|-------------|--------------------------------------------------------------|-----|-------------|
| `class`     | [Either](src/items/either.ts)                                | `f` |             |
| `predictor` | [leyyoEitherPredictor](src/loader/leyyo-either-predictor.ts) |     |             |
| `lazy`      | [leyyoEitherLazy](src/loader/leyyo-either-lazy.ts)           |     |             |
> Props: `P`: **predictor**, `F`: **FQN**, `E`: **Emit**, `I`: **I18N**

### Dependencies
| Name               | Framework | Description |
|--------------------|-----------|-------------|
| `@leyyo/common`    | √         |             |

## Standards
- Language: `TS`
- Eslint: `Yes`
- Static Code Analysis: `Yes` *IntelliJ Code Inspections*
- DDD - Document Driven: `Yes`
- DDD - Domain Driven: `Yes`
- EDD - Exception Driven: `Yes`
- TDD - Test Driven: `Yes`
- LDD - Log Driven: `Yes`
- 12FA - 12 Factor-App: `50%` *Partially*

### Prepared by
- Mustafa Yelmer
- mustafayelmer(at)gmail.com
- `2025-01-10`
