:::slides{link="https://docs.google.com/presentation/d/e/2PACX-1vT42sOyXYv6xcFg-GC1WAppXLrMuQhbY9bgm47xOZ2LaMdV50Dv6jfMUEOVlbzx6CeC_Qa5hMXo5mx8" lesson="https://docs.google.com/document/d/1rCQTAS8NgyVWXpFHhCvWUsApA-rj4LOX2Zk3WPq8t14/edit?usp=drive_link" }
# MicroBit Lockbox Puzzle

Your teacher will use the slide deck below when they facilitate this lesson--feel free to use this copy to access links, etc.
:::
---

## Conditionals Basics

Here are some tutorials on the basics of conditional control structures, which allow you to have your MicroBit make automated decisions based on the values of variables stored in its memory.

::tutorial{slug="if-basics"}
::tutorial{slug="logic-expressions"}
::tutorial{slug="if-else"}
::tutorial{slug="random-variable"}
::tutorial{slug="sensor-variables"}

## Conditionals Demonstration

Download the `.hex` file below by clicking the button. Load it onto your MicroBit, and press the `A` button to start up the program. End the program by shaking the Micro:Bit, and it will give you some output based on how you interacted with the buttons.

::download[Download]{file="/examples/microbit-conditionals-demo.hex"}

> Experiment with the program a couple of times before you look at the code! What happens if you press the button lots of times? Just a few times?

Consider the following questions after running the program:

- What decision did the computer make?
- What data do you think the computer used in order to make that decision?
- What would you need to know about the input provided to the program in order to predict its output?

---

## Modifying Conditionals

Try modifying the code linked below (either download or open in MakeCode) according to the following prompt:

::download[Download]{file='/examples/microbit-conditionals-demo.hex'}
::button[Open in MakeCode]{href="https://makecode.microbit.org/_M5cMcq4VuhtM" style="is-primary"}

- Can you modify the code so it shows different icons after the user shakes the Micro:Bit?
- Can you make it so the user has to click a lot more times to get the “right arrow” icon after shaking the Micro:Bit?
- Can you add another “if” block to make it so the Micro:Bit displays a third icon if the user doesn’t click the button at all?

---

## Modifying Logical Expressions

Check out the example code below, and try to predict what it will cause the MicroBit to do:

::makecode{id="_UzmWYybEPiDL"}

::download[Download]{file="/examples/microbit-logic-demo.hex"}
::button[Open in MakeCode]{href="https://makecode.microbit.org/_UzmWYybEPiDL" style='is-primary'}

Then, try modifying the code according to the following prompts:

- Can you modify the code so it might show a third output depending on the variable values?

## Make: MicroBit Lockbox Puzzle

Previously, you created a [fidget cube](/lessons/input) project to prototype your lockbox puzzle. Now, you'll use variables and "if" statements to turn your "fidget cube" into a puzzle box. Your team will earn points based on how difficult your puzzle is to solve:

- **0 points:** Took longer than 60 seconds to complete the puzzle (puzzle was too hard)
- **1 point:** Took between 0 and 15 seconds to complete the puzzle
- **2 points:** Took between 15 and 45 seconds to complete the puzzle
- **3 points:** Took between 45 and 60 seconds to complete the puzzle

Your puzzle box must also meet the following requirements:

- Your code cannot include the “pause” block except as part of an ending animation
- Your box must display when the user makes progress & unlocks it

**Choose one of the project ideas below to get started**, or make up your own project based on what you know about coding with the MicroBit!

<table class='table' style='border: 3px solid black;'>
    <thead style='border: 1px solid black;'>
        <th>Options</th>
        <th>Spiciness</th>
        <th>Description</th>
    </thead>
    <tbody style='border: 1px solid black;'>
        <tr class='has-text-centered is-fullwidth'>
            <td class='is-narrow' style='background-color: #e3efc8;'>Combination Lock</td>
            <td class='is-narrow'>🔥</td>
            <td class='has-text-left'>Use variables to a create a “combination lock”, where the user has to figure out the right numbers to enter to “unlock” the puzzle.</td>
        <tr>
        <tr class='has-text-centered is-fullwidth'>
            <td class='is-narrow' style='background-color: #e3efc8;'>Logical Puzzle</td>
            <td class='is-narrow'>🔥🔥</td>
            <td class='has-text-left'>Create a puzzle that is unlocked by providing the right values to a logical expression. Your puzzle will need to use two or more variables to implement this kind of lock!</td>
        <tr>
        <tr class='has-text-centered is-fullwidth'>
            <td class='is-narrow' style='background-color: #e3efc8;'>Puzzle Box with Stages</td>
            <td class='is-narrow'>🔥🔥🔥</td>
            <td class='has-text-left'>Create a puzzle box where the user has to provide the right inputs in the right order to unlock the box. You will need lots of “if” statements to make this work!</td>
        <tr>
        <tr class='has-text-centered is-fullwidth'>
            <td class='is-narrow' style='background-color: #e3efc8;'>Make Up Your Own!</td>
            <td class='is-narrow'>❓</td>
            <td class='has-text-left'>Create your own spin on the “lockbox puzzle” idea. Incorporate new blocks, and see if you can create something unique!</td>
        <tr>
    </tbody>
</table>

Here are some ideas for how you might use conditionals and variables in your lockbox puzzle. Check out the tutorials, and then use the *Project Design Menu* in your handbook to make a plan for how you'll modify your "fidget cube" to turn it into a puzzle box. You will probably want to combine and/or modify the examples below to make your box challenging enough!

::tutorial{slug="unlock-with-count"}
::tutorial{slug="unlock-with-logic"}
::tutorial{slug="unlock-with-stages"}

You can also browse the [*Tutorials* page](/tutorials) to find information about other blocks, techniques, and concepts to use when crafting your puzzle!