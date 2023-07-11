import { newSpecPage } from '@stencil/core/testing';
import { GgEditExpenseModal } from '../gg-edit-expense-modal';

describe('GgEditExpenseModal', () => {
  it('should pass correct data to saveExpense on form submission', async () => {
    const saveExpense = jest.fn(); // create a mock function to pass as prop

    const page = await newSpecPage({
      components: [GgEditExpenseModal],
      html: `<gg-edit-expense-modal></gg-edit-expense-modal>`,
      supportsShadowDom: false,
    });

    // Set the saveExpense prop to our mock function
    const component = page.rootInstance as GgEditExpenseModal;
    component.saveExpense = saveExpense;

    // Set initial data
    component.expenseData = { amount: 1000, description: 'test', date: '2023-07-01' };

    // Wait for any initial asynchronous operations
    await page.waitForChanges();

    // Simulate user input
    const amountInput = page.doc.querySelector('input[type="number"]') as HTMLInputElement;
    const descriptionInput = page.doc.querySelector('input[type="text"]') as HTMLInputElement;
    const dateInput = page.doc.querySelector('input[type="date"]') as HTMLInputElement;

    // Simulate user typing and dispatch event
    amountInput.value = '2000';
    amountInput.dispatchEvent(new Event('input'));

    descriptionInput.value = 'test updated';
    descriptionInput.dispatchEvent(new Event('input'));

    dateInput.value = '2023-07-02';
    dateInput.dispatchEvent(new Event('input'));

    // Wait for any asynchronous operations in the event handler
    await page.waitForChanges();

    // Manually trigger the form submit event
    const form = page.doc.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    // Wait for any asynchronous operations in the event handler
    await page.waitForChanges();

    // Check if saveExpense was called with correct data
    expect(saveExpense).toHaveBeenCalledWith({
      amount: '2000',
      description: 'test updated',
      date: '2023-07-02',
    });
  });

  // Additional tests would be created here...
});
