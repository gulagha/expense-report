/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ExpenseData } from "./components";
import { ExpenseData as ExpenseData1 } from "./utils/types";
export { ExpenseData } from "./components";
export { ExpenseData as ExpenseData1 } from "./utils/types";
export namespace Components {
    interface GgBackdrop {
        /**
          * A prop to make the backdrop visible
         */
        "open": boolean;
    }
    interface GgButton {
        /**
          * A prop that determines it the button is secondary
         */
        "secondary": boolean;
    }
    interface GgEditExpenseModal {
        /**
          * The initial data for the expense to edit. This should be provided from the parent component.
         */
        "expenseData": { amount: number; description: string; date: string };
        /**
          * The function to save the edited expense. This should be provided from the parent component.
         */
        "saveExpense": (data: { amount: number; description: string; date: string }) => void;
    }
    interface GgExpensesList {
        /**
          * List of expenses
         */
        "expenses": ExpenseData[];
        /**
          * An action when deleting the expense
         */
        "onDelete": (expsenseID: string) => void;
        /**
          * An action when editing the expense
         */
        "onEdit": (expense: ExpenseData) => void;
    }
    interface GgFunctionalButton {
    }
    interface GgIcon {
        /**
          * Name of the icon
         */
        "name": string;
    }
    interface GgListItem {
        /**
          * The expense amount
         */
        "expenseData": ExpenseData1;
        /**
          * The function that is tirggered by delete button
         */
        "onDelete": (expenseId: string) => void;
        /**
          * The function that is tirggered by edit button
         */
        "onEdit": (data: ExpenseData1) => void;
    }
    interface GgMain {
    }
    interface GgMainTemplate {
        /**
          * Expenses data
         */
        "data": ExpenseData1[];
        /**
          * The theme
         */
        "isDarkMode": boolean;
        /**
          * An cction when creating a new expense
         */
        "onCreate": (expense: ExpenseData1) => void;
        /**
          * An action when deleting the expense
         */
        "onDelete": (expsenseID: string) => void;
        /**
          * An action when editing the expense
         */
        "onEdit": (expense: ExpenseData1) => void;
        /**
          * Swtiches between dark and light mode
         */
        "switchDarkMode": () => void;
    }
    interface GgStackedChart {
        /**
          * Expenses grouped by month
         */
        "expenses": { month: string, amount: number, year: number }[];
    }
}
declare global {
    interface HTMLGgBackdropElement extends Components.GgBackdrop, HTMLStencilElement {
    }
    var HTMLGgBackdropElement: {
        prototype: HTMLGgBackdropElement;
        new (): HTMLGgBackdropElement;
    };
    interface HTMLGgButtonElement extends Components.GgButton, HTMLStencilElement {
    }
    var HTMLGgButtonElement: {
        prototype: HTMLGgButtonElement;
        new (): HTMLGgButtonElement;
    };
    interface HTMLGgEditExpenseModalElement extends Components.GgEditExpenseModal, HTMLStencilElement {
    }
    var HTMLGgEditExpenseModalElement: {
        prototype: HTMLGgEditExpenseModalElement;
        new (): HTMLGgEditExpenseModalElement;
    };
    interface HTMLGgExpensesListElement extends Components.GgExpensesList, HTMLStencilElement {
    }
    var HTMLGgExpensesListElement: {
        prototype: HTMLGgExpensesListElement;
        new (): HTMLGgExpensesListElement;
    };
    interface HTMLGgFunctionalButtonElement extends Components.GgFunctionalButton, HTMLStencilElement {
    }
    var HTMLGgFunctionalButtonElement: {
        prototype: HTMLGgFunctionalButtonElement;
        new (): HTMLGgFunctionalButtonElement;
    };
    interface HTMLGgIconElement extends Components.GgIcon, HTMLStencilElement {
    }
    var HTMLGgIconElement: {
        prototype: HTMLGgIconElement;
        new (): HTMLGgIconElement;
    };
    interface HTMLGgListItemElement extends Components.GgListItem, HTMLStencilElement {
    }
    var HTMLGgListItemElement: {
        prototype: HTMLGgListItemElement;
        new (): HTMLGgListItemElement;
    };
    interface HTMLGgMainElement extends Components.GgMain, HTMLStencilElement {
    }
    var HTMLGgMainElement: {
        prototype: HTMLGgMainElement;
        new (): HTMLGgMainElement;
    };
    interface HTMLGgMainTemplateElement extends Components.GgMainTemplate, HTMLStencilElement {
    }
    var HTMLGgMainTemplateElement: {
        prototype: HTMLGgMainTemplateElement;
        new (): HTMLGgMainTemplateElement;
    };
    interface HTMLGgStackedChartElement extends Components.GgStackedChart, HTMLStencilElement {
    }
    var HTMLGgStackedChartElement: {
        prototype: HTMLGgStackedChartElement;
        new (): HTMLGgStackedChartElement;
    };
    interface HTMLElementTagNameMap {
        "gg-backdrop": HTMLGgBackdropElement;
        "gg-button": HTMLGgButtonElement;
        "gg-edit-expense-modal": HTMLGgEditExpenseModalElement;
        "gg-expenses-list": HTMLGgExpensesListElement;
        "gg-functional-button": HTMLGgFunctionalButtonElement;
        "gg-icon": HTMLGgIconElement;
        "gg-list-item": HTMLGgListItemElement;
        "gg-main": HTMLGgMainElement;
        "gg-main-template": HTMLGgMainTemplateElement;
        "gg-stacked-chart": HTMLGgStackedChartElement;
    }
}
declare namespace LocalJSX {
    interface GgBackdrop {
        /**
          * A prop to make the backdrop visible
         */
        "open"?: boolean;
    }
    interface GgButton {
        /**
          * A prop that determines it the button is secondary
         */
        "secondary"?: boolean;
    }
    interface GgEditExpenseModal {
        /**
          * The initial data for the expense to edit. This should be provided from the parent component.
         */
        "expenseData"?: { amount: number; description: string; date: string };
        /**
          * The function to save the edited expense. This should be provided from the parent component.
         */
        "saveExpense"?: (data: { amount: number; description: string; date: string }) => void;
    }
    interface GgExpensesList {
        /**
          * List of expenses
         */
        "expenses"?: ExpenseData[];
        /**
          * An action when deleting the expense
         */
        "onDelete"?: (expsenseID: string) => void;
        /**
          * An action when editing the expense
         */
        "onEdit"?: (expense: ExpenseData) => void;
    }
    interface GgFunctionalButton {
    }
    interface GgIcon {
        /**
          * Name of the icon
         */
        "name"?: string;
    }
    interface GgListItem {
        /**
          * The expense amount
         */
        "expenseData"?: ExpenseData1;
        /**
          * The function that is tirggered by delete button
         */
        "onDelete"?: (expenseId: string) => void;
        /**
          * The function that is tirggered by edit button
         */
        "onEdit"?: (data: ExpenseData1) => void;
    }
    interface GgMain {
    }
    interface GgMainTemplate {
        /**
          * Expenses data
         */
        "data"?: ExpenseData1[];
        /**
          * The theme
         */
        "isDarkMode"?: boolean;
        /**
          * An cction when creating a new expense
         */
        "onCreate"?: (expense: ExpenseData1) => void;
        /**
          * An action when deleting the expense
         */
        "onDelete"?: (expsenseID: string) => void;
        /**
          * An action when editing the expense
         */
        "onEdit"?: (expense: ExpenseData1) => void;
        /**
          * Swtiches between dark and light mode
         */
        "switchDarkMode"?: () => void;
    }
    interface GgStackedChart {
        /**
          * Expenses grouped by month
         */
        "expenses"?: { month: string, amount: number, year: number }[];
    }
    interface IntrinsicElements {
        "gg-backdrop": GgBackdrop;
        "gg-button": GgButton;
        "gg-edit-expense-modal": GgEditExpenseModal;
        "gg-expenses-list": GgExpensesList;
        "gg-functional-button": GgFunctionalButton;
        "gg-icon": GgIcon;
        "gg-list-item": GgListItem;
        "gg-main": GgMain;
        "gg-main-template": GgMainTemplate;
        "gg-stacked-chart": GgStackedChart;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gg-backdrop": LocalJSX.GgBackdrop & JSXBase.HTMLAttributes<HTMLGgBackdropElement>;
            "gg-button": LocalJSX.GgButton & JSXBase.HTMLAttributes<HTMLGgButtonElement>;
            "gg-edit-expense-modal": LocalJSX.GgEditExpenseModal & JSXBase.HTMLAttributes<HTMLGgEditExpenseModalElement>;
            "gg-expenses-list": LocalJSX.GgExpensesList & JSXBase.HTMLAttributes<HTMLGgExpensesListElement>;
            "gg-functional-button": LocalJSX.GgFunctionalButton & JSXBase.HTMLAttributes<HTMLGgFunctionalButtonElement>;
            "gg-icon": LocalJSX.GgIcon & JSXBase.HTMLAttributes<HTMLGgIconElement>;
            "gg-list-item": LocalJSX.GgListItem & JSXBase.HTMLAttributes<HTMLGgListItemElement>;
            "gg-main": LocalJSX.GgMain & JSXBase.HTMLAttributes<HTMLGgMainElement>;
            "gg-main-template": LocalJSX.GgMainTemplate & JSXBase.HTMLAttributes<HTMLGgMainTemplateElement>;
            "gg-stacked-chart": LocalJSX.GgStackedChart & JSXBase.HTMLAttributes<HTMLGgStackedChartElement>;
        }
    }
}
