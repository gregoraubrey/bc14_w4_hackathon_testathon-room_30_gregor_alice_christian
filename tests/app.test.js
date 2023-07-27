/* A user visits the site, adds a new todo to the list, deletes a todo from the list, refreshes the page and the todos are still persisted/saved.

For each step, think about how you can simulate any user interactions and which assertions would be useful to make and would give confidence. */

//USER FLOW 
    //go to website
        //✅ 🧪check that page has a certain URL
    // click in input field role: textbox name: Task
        //✅ 🧪 Check that the field is currently empty
    //type in text
        //✅ 🧪check that the text that has been typed in is in the input field
    //click in the Completion date box
        //click on the date box id = date-box
            // type in date in dd/mm/yyyy format
                // 🧪check that the date that has been typed in is in the date box
            // click on date on calendar (COME BACK TO THIS LATER)
    //click on button name: ➕ Create! role button
    // new todo item appears in the list
        // 🧪check that the new todo item is in the list
    // text in the input field is cleared
        // 🧪check that the text in the input field is cleared
    // repeat add for 3 items
        // repeat the tests above 3 more times
    // click on the delete button to remove one of them name: 🗑️  role: button
        // 🧪check that the deleted item is removed from the list
    // refresh page and 2 remaining items should still be there
        // 🧪check that the 2 remaining items are still in the list

// @ts-check

import { test, expect } from '@playwright/test';


// test.beforeEach(async ({ page }) => {
//     await page.goto("http://localhost:3000");
//   });

test ("navigate to url and check title is correct", async ({ page }) => {
    await page.goto("http://localhost:3000");
    await expect(page).toHaveTitle(/Todos/);
});

test('input field is empty', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const input = await page.getByRole('textbox', { name: 'Task' });
    expect(await input.textContent()).toBe("");
  });


test ('input field contains 1st todo', async ({ page }) => {
    await page.goto("http://localhost:3000");
    const input = await page.getByRole("textbox", { name: "Task" });
    const todo1 = "This is the 1st todo";
    await input.type(todo1);
    expect(await input.inputValue()).toContain(todo1);
});

//click in the Completion date box
        //click on the date box id = date-box
        // type in date in dd/mm/yyyy format
// 🧪check that the date that has been typed in is in the date box


// test ('click on the date box and type in the date', async ({ page }) => {
//     const dateButton = await page.$('#date-box');
//     const input = page.getByRole('textbox', { name: 'Completion date' });
//     await input.type("This text should disappear after the user clicks the button");
//     await dateButton.click();
//     await expect(input).toHaveValue("");
// });

