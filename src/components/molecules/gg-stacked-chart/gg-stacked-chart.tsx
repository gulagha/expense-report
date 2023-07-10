import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'gg-stacked-chart',
  styleUrl: 'gg-stacked-chart.css',
  shadow: true
})
export class GgStackedChart {
  @Element() hostElement: HTMLGgStackedChartElement;

  /**
   * Expenses grouped by month
   */
  @Prop({reflect: true}) expenses: { month: string, amount: number, year: number }[] = [];

  private getNormalizedHeight(amount: number): number {
    const maxAmount = Math.max(...this.expenses.map(expense => expense.amount));
    return (amount / maxAmount) * 200;
  }

  render() {
    return (
      <div class="chart">
        {this.expenses.map(expense =>
          <div>
            <div class="bar" style={{height: `${this.getNormalizedHeight(expense.amount)}px`}}>
              <span class="amount">{`${expense.amount} EUR`}</span>
            </div>
            <span class="month">{`${expense.month}`}</span>
          </div>
        )}
      </div>
    );
  }
}
