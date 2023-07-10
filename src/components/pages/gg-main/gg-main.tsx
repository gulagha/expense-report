import { Component, Host, h, State } from '@stencil/core';
import { set, state } from '../../../store/store';
import { getItems, createItem, updateItem, deleteItem } from '../../../utils/api';

@Component({
  tag: 'gg-main',
  styleUrl: 'gg-main.css',
  shadow: true,
})
export class GgMain {
  @State() isEditingModalOpen: boolean = false;
  @State() isCreateModalOpen: boolean = false;
  @State() editedExpense: {date: 'string', amount: number, description: string};

  componentDidLoad() {
    this.getExpenses();
  };

  private getExpenses = () => {
    set("loading", true);
    getItems()
      .then(data => set("data", data))
      .catch(error => set("error", error))
      .finally(() => set("loading", false));
  }

  private openEditingModal = (data) => {
    this.editedExpense = {
      ...data,
      date: new Date(data.date).toISOString().split('T')[0]
    }
    console.log(this.editedExpense);
    this.isEditingModalOpen = true;
  }

  private openCreateModal = () => {
    this.isCreateModalOpen = true;
  }

  private saveExpense = (data) => {
    set("loading", true)
    const newExpense = {
      ...data,
      date: Boolean(data.date) ? new Date(data.date).getTime() : null
    };

    createItem(newExpense)
      .then(() => console.log("success"))
      .catch(error => set("error", error))
      .finally(() => {
        set("loading", false)
        this.isCreateModalOpen = false;
        this.getExpenses();
      });
  }

  private updateExpense = (data) => {
    set("loading", true)
    const newExpense = {
      ...data,
      date: Boolean(data.date) ? new Date(data.date).getTime() : null
    };

    updateItem(data.expenseId, newExpense)
      .then(() => console.log("success"))
      .catch(error => set("error", error))
      .finally(() => {
        set("loading", false)
        this.isCreateModalOpen = false;
        this.getExpenses();
      });
  }

  private deleteExpense = (expenseId) => {
    deleteItem(expenseId)
      .then(() => console.log("success"))
      .catch(error => set("error", error))
      .finally(() => {
        set("loading", false)
        this.getExpenses();
      });
  }

  render() {
    return (
      <Host data-theme={state.isDarkMode ? "dark" : null}>
        {state.loading ? "Loading" : null}
        {this.isEditingModalOpen
          ? <div>
            <gg-backdrop open />
            <gg-edit-expense-modal
              expenseData={this.editedExpense}
              saveExpense={(data) => this.updateExpense(data)}
              onPressCancel={() => this.isEditingModalOpen = false}
              />
          </div>
          : null
        }

        {this.isCreateModalOpen
          ? <div>
            <gg-backdrop open />
            <gg-edit-expense-modal
              saveExpense={(data) => this.saveExpense(data)}
              onPressCancel={() => this.isCreateModalOpen = false}
              />
          </div>
          : null
        }
        <gg-main-template
          onCreate={this.openCreateModal}
          onEdit={this.openEditingModal}
          onDelete={(id) => confirm("Are you sure?") ? this.deleteExpense(id) : console.log("cancelled") }
          switchDarkMode={() => set("isDarkMode", !state.isDarkMode)}
          isDarkMode={state.isDarkMode}
          data={state.data}
        />
      </Host>
    );
  }
}
