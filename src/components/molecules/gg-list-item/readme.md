# gg-list-item



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute | Description                                     | Type                          | Default     |
| ------------- | --------- | ----------------------------------------------- | ----------------------------- | ----------- |
| `expenseData` | --        | The expense amount                              | `ExpenseData`                 | `undefined` |
| `onDelete`    | --        | The function that is tirggered by delete button | `(expenseId: string) => void` | `undefined` |
| `onEdit`      | --        | The function that is tirggered by edit button   | `(data: ExpenseData) => void` | `undefined` |


## Dependencies

### Used by

 - [gg-expenses-list](../../organisms/gg-expenses-list)

### Depends on

- [gg-functional-button](../../atoms/gg-functional-button)
- [gg-icon](../../atoms/gg-icon)

### Graph
```mermaid
graph TD;
  gg-list-item --> gg-functional-button
  gg-list-item --> gg-icon
  gg-expenses-list --> gg-list-item
  style gg-list-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
