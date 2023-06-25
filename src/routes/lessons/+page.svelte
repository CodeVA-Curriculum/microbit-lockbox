<script>
    import {base} from '$app/paths'
    import microbit from '$lib/assets/bbc_microbit.jpg'
    import variable from '$lib/assets/variable-handler.png'
    import input from '$lib/assets/input.jpg'
    import fidget from '$lib/assets/fidget-cube.jpg'
</script>

<div class='lessons content'>
    <h1>Micro:Bit Lockbox Challenges</h1>
    <p class='block'>The links below will take you to resources for each of the four challenges leading up to the <i>Micro:Bit Lockbox Puzzle Competition</i>. Check them out! You can also view the high-level agenda for the entire unit of study by clicking the button below:</p>
    <a class='button' href="https://docs.google.com/document/d/1W4FQzdPy7AtAeiBMWvBBFyOOglLRKuoOdA6qFAvNu74/edit" target="_blank">Open the High-Level Agenda</a>
    <hr style='margin-bottom: 3rem;'>
    <div class='card my-5'>
        <div class='card-content'>
            <div class='columns'>
                <div class='column is-one-quarter'>
                <img src={microbit} alt="The BBC microbit on a white background">
                </div>
                <div class='column'>
                    <h2><a href="{base}/lessons/display-lifecycle">Challenge #1: Display & Lifecycle</a></h2>
                    <p class='block'>In this lesson, students learn the basics of coding for the Micro:Bit using the MakeCode development tool. Students will engage in PRIMM cycles, pair programming, and will begin working on the puzzle box they’ll finish in later lessons by building an “unlocking” animation using display output blocks.</p>
                </div>
            </div>
        </div>
    </div>
    <div class='card my-5'>
        <div class='card-content'>
            <div class='columns'>
                <div class='column is-one-quarter'>
                    <img src={input} alt="The Micro:Bit with alligator clips attached to its pins">
                </div>
                <div class='column'>
                    <h2><a href="{base}/lessons/input">Challenge #2: Input Prototype</a></h2>
                    <p class='block'>In this lesson, students will learn how to make interactive programs using input event blocks, the MakeCode development tool, and the Micro:Bit microcontroller. Students will work collaboratively to explore different methods of providing input to the Micro:Bit, and will create a “fidget cube” puzzle box prototype which will serve as a starting point for their “lockbox” puzzles (see <a href="{base}/lessons/conditions">Conditionals with Micro:Bit</a> for the “lockbox” project description).</p>
                </div>
            </div>
        </div>
    </div>
    <div class='card my-5'>
        <div class='card-content'>
            <div class='columns'>
                <div class='column is-one-quarter'>
                    <img src={variable} alt="MakeCode event and variable blocks">
                </div>
                <div class='column'>
                    <h2><a href='{base}/lessons/variables'>Challenge #3: Scoring with Variables</a></h2>
                    <p class='block'>This lesson introduces the use of variables to store data or the results of mathematical operations. Students will practice giving variables unique and meaningful names. At the end of the lesson, students will practice using variables by creating a “scorekeeping” program, using the Micro:Bit to keep track of the score for a game.</p>
                </div>
            </div>
            
        </div>
    </div>
    <div class='card my-5'>
        <div class='card-content'>
            <div class='columns'>
                <div class='column is-one-quarter'>
                    <img src={fidget} alt="Fidget cube example projects">
                </div>
                <div class='column'>
                    <h2><a href="{base}/lessons/conditions">Challenge #4: Micro:Bit Lockbox</a></h2>
                    <p class='block'>In this lesson, students will learn how to write conditional control structures (e..g, “if” statements) to have a Micro:Bit make automated decisions based on sensor input. At the end of the lesson, students will use these skills to build a “lockbox” puzzle for their peers to solve.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    a {
        color: black;
    }
    a:hover {
        text-decoration: underline;
    }
    img {
        border-radius: 12px;
    }
</style>