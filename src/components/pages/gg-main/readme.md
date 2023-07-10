# gg-main



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [gg-backdrop](../../atoms/gg-backdrop)
- [gg-edit-expense-modal](../../molecules/gg-edit-expense-modal)
- [gg-main-template](../../templates/gg-main-template)

### Graph
```mermaid
graph TD;
  gg-main --> gg-backdrop
  gg-main --> gg-edit-expense-modal
  gg-main --> gg-main-template
  gg-edit-expense-modal --> gg-button
  gg-main-template --> gg-icon
  gg-main-template --> gg-stacked-chart
  gg-main-template --> gg-expenses-list
  gg-expenses-list --> gg-list-item
  gg-list-item --> gg-functional-button
  gg-list-item --> gg-icon
  style gg-main fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
