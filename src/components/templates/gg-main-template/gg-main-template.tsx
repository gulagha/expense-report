import { Component, Host, State, h, Prop } from '@stencil/core';
import { groupByMonth } from '../../../utils/utils';
import { ExpenseData } from '../../../utils/types';

@Component({
  tag: 'gg-main-template',
  styleUrl: 'gg-main-template.css',
  shadow: true,
})
export class GgMainTemplate {
  /**
   * The theme
   */
  @Prop() isDarkMode: boolean = false;
  /**
   * Swtiches between dark and light mode
   */
  @Prop() switchDarkMode: () => void;
  /**
   * An cction when creating a new expense
   */
  @Prop() onCreate: (expense: ExpenseData) => void
  /**
   * An action when deleting the expense
   */
  @Prop() onDelete: (expsenseID: string) => void
  /**
   * An action when editing the expense
   */
  @Prop() onEdit: (expense: ExpenseData) => void
  /**
   * Expenses data
   */
  @Prop({reflect: true}) data: ExpenseData[] = [];
  @State() isStackView: boolean = false;
  @State() newExpense: ExpenseData;

  private setChartView = () => {
    this.isStackView = true;
  }

  private setListView = () => {
    this.isStackView = false;
  }

  private createExpense = (event) => {
    event.stopPropagation()
    if(Boolean(this.onCreate) && Boolean(this.newExpense)) this.onCreate(this.newExpense);
  }

  render() {
    return (
      <Host>
        <div class="navigation">
          <div class="page-setup">
            <div class={this.isStackView ? 'view' : 'view selected'} onClick={this.setListView}>
              List
            </div>
            <div class={this.isStackView ? 'view selected' : 'view'} onClick={this.setChartView}>
              Chart
            </div>
          </div>

          <div class="actions">
            <div onClick={this.createExpense} class="add-expense"> + </div>
            <gg-icon onClick={this.switchDarkMode} name={this.isDarkMode ? "light-mode-icon" : "dark-mode-icon"}/>
          </div>
        </div>
        {
          this.isStackView
            ? <gg-stacked-chart expenses={groupByMonth(this.data)} />
            : <gg-expenses-list onDelete={this.onDelete} onEdit={this.onEdit} expenses={this.data} />
        }
      </Host>
    );
  }

}
