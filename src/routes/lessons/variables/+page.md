:::slides{link="https://docs.google.com/presentation/d/e/2PACX-1vS5mD3FMLhnB5950PQP19qB7rS4uhoteTWYK-yDsLwEdrDnuTvzefmTrtTC-5lJ7dRNtlTq2bxo7YFa" lesson="https://docs.google.com/document/d/14YcrFLlldevIFwIYBrG2ZKXzpzrr2SbzdX1v3hfg8gc/edit"}
# Variables with MicroBit

Your teacher will use the slide deck below when they facilitate this lesson--feel free to use this copy to access links, etc.
:::

Here is a tutorial to review the basics of using variables:

::tutorial{slug="variable-basics"}

---

## Predict, Run, Investigate

Check out the starter code below:

::makecode{id='_gRW4e5XFz3R3'}

You can download the starter code or open it in the MakeCode editor by clicking the buttons below:

::download[Download]{file="/examples/microbit-variables-prim.hex"}
::button[Open in MakeCode]{href="https://makecode.microbit.org/_gRW4e5XFz3R3" style="is-primary"}

Try running and modifying the code below to answer the following questions:

- What would you add to the code to make it so the MicroBit keeps track of two players’ scores rather than just one?

---

## Make: Scorekeeper

Create a MicroBit program using variables and input events that allows you to keep score for a game. Be sure to consider the following questions:

- How many variables will you need to keep track of the score for your game?
- What inputs will the MicroBit listen to in order to modify the variable?

**Choose one of the prompts below** to help guide your work, or make up your own project that will allow you to practice creating and modifying variables in your code.

<table class='table' style='border: 3px solid black;'>
    <thead style='border: 1px solid black;'>
        <th>Options</th>
        <th>Spiciness</th>
        <th>Description</th>
    </thead>
    <tbody style='border: 1px solid black;'>
        <tr class='has-text-centered is-fullwidth'>
            <td class='is-narrow' style='background-color: #e3efc8;'>Adding & Subtracting</td>
            <td class='is-narrow'>🔥</td>
            <td class='has-text-left'>Create a program that keeps track of how many times you win the game rock/paper/scissors, but with a twist—if you lose a game, subtract 1 point from your score. If you win, add 2 points.</td>
        <tr>
        <tr class='has-text-centered is-fullwidth'>
            <td class='is-narrow' style='background-color: #e3efc8;'>Timed Score</td>
            <td class='is-narrow'>🔥🔥🔥</td>
            <td class='has-text-left'>The “lockbox” competition you’ll compete in later today awards scores based on how long it takes to solve the puzzle: 0 pts for more than 60s, 3 pts for 45-60s, 2 pts for 15-45s, and 1 pt for 0-15s. Create a Micro:Bit program that will keep track of time and automatically award points based on these rules.</td>
        <tr>
        <tr class='has-text-centered is-fullwidth'>
            <td class='is-narrow' style='background-color: #e3efc8;'>Make Up Your Own!</td>
            <td class='is-narrow'>❓</td>
            <td class='has-text-left'>Create your own spin on the “scorekeeper” idea. Incorporate new blocks, and see if you can create something unique!</td>
        <tr>
    </tbody>
</table>

For an extra challenge, check out the resource below, which covers special *sensor variables* available to the MicroBit:

::tutorial{slug="sensor-variables"}