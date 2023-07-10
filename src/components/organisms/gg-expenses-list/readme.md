# gg-expenses-list



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description                         | Type                             | Default     |
| ---------- | --------- | ----------------------------------- | -------------------------------- | ----------- |
| `expenses` | --        | List of expenses                    | `ExpenseData[]`                  | `[]`        |
| `onDelete` | --        | An action when deleting the expense | `(expsenseID: string) => void`   | `undefined` |
| `onEdit`   | --        | An action when editing the expense  | `(expense: ExpenseData) => void` | `undefined` |


## Dependencies

### Used by

 - [gg-main-template](../../templates/gg-main-template)

### Depends on

- [gg-list-item](../../molecules/gg-list-item)

### Graph
```mermaid
graph TD;
  gg-expenses-list --> gg-list-item
  gg-list-item --> gg-functional-button
  gg-list-item --> gg-icon
  gg-main-template --> gg-expenses-list
  style gg-expenses-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
