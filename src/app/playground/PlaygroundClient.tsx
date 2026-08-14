"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useState } from "react";

import { DialRoot, useDialKit } from "dialkit";

import "dialkit/styles.css";

export function PlaygroundClient() {
  const [showControls, setShowControls] = useState(true);
  const params = useDialKit("Typography", {
    fontFamily: {
      type: "select",
      options: ["system", "serif", "monospace"],
      default: "system"
    },
    fontSize: [18, 14, 28, 1],
    lineHeight: [1.5, 1.1, 2, 0.05],
    measure: [680, 420, 900, 10]
  });

  const style = {
    fontFamily:
      params.fontFamily === "serif"
        ? "Georgia, serif"
        : params.fontFamily === "monospace"
          ? "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
          : "system-ui, sans-serif",
    fontSize: `${params.fontSize}px`,
    lineHeight: params.lineHeight,
    maxWidth: `${params.measure}px`
  } as CSSProperties;

  return (
    <main className="playground-page">
      <article className="playground-specimen" style={style}>
        <header>
          <h1 id="playground-title">HTML Specimen</h1>
          <p>
            A plain page with common elements for tuning typography, spacing,
            rhythm, and form defaults.
          </p>
        </header>

        <hr />

        <section aria-labelledby="headings-title">
          <h2 id="headings-title">Headings</h2>
          <h1>Heading level one</h1>
          <h2>Heading level two</h2>
          <h3>Heading level three</h3>
          <h4>Heading level four</h4>
          <h5>Heading level five</h5>
          <h6>Heading level six</h6>
        </section>

        <section aria-labelledby="text-title">
          <h2 id="text-title">Text</h2>
          <p>
            This paragraph includes <strong>strong text</strong>,{" "}
            <em>emphasis</em>, <small>small text</small>, <mark>marked text</mark>,{" "}
            <abbr title="HyperText Markup Language">HTML</abbr>,{" "}
            <code>inline code</code>, <kbd>Command</kbd> + <kbd>K</kbd>,{" "}
            <samp>sample output</samp>, H<sub>2</sub>O, x<sup>2</sup>, and a{" "}
            <Link href="/">plain link</Link>.
          </p>
          <p>
            <time dateTime="2026-06-05">June 5, 2026</time> is just a sample
            date. This is filler copy for checking line length and readable
            measure.
          </p>
          <blockquote>
            <p>
              Good defaults should make ordinary content feel calm before any
              visual system gets involved.
            </p>
            <cite>Specimen note</cite>
          </blockquote>
          <pre>
            <code>{`function hello(name: string) {
  return \`Hello, \${name}\`;
}`}</code>
          </pre>
        </section>

        <section aria-labelledby="lists-title">
          <h2 id="lists-title">Lists</h2>
          <ul>
            <li>Unordered item one</li>
            <li>Unordered item two with a little more text</li>
            <li>Unordered item three</li>
          </ul>
          <ol>
            <li>Ordered item one</li>
            <li>Ordered item two</li>
            <li>Ordered item three</li>
          </ol>
          <dl>
            <dt>Term</dt>
            <dd>Definition text for the term.</dd>
            <dt>Another term</dt>
            <dd>Another definition with enough length to wrap.</dd>
          </dl>
        </section>

        <section aria-labelledby="table-title">
          <h2 id="table-title">Table</h2>
          <div className="table-wrap">
            <table>
              <caption>Project rows</caption>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Project Alpha</td>
                  <td>Case study</td>
                  <td>Draft</td>
                </tr>
                <tr>
                  <td>Project Beta</td>
                  <td>Writing</td>
                  <td>Later</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}>Two placeholder rows</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        <section aria-labelledby="forms-title">
          <h2 id="forms-title">Forms</h2>
          <form>
            <fieldset>
              <legend>Inputs</legend>

              <label>
                Text
                <input type="text" defaultValue="Sample text" />
              </label>

              <label>
                Email
                <input type="email" placeholder="name@example.com" />
              </label>

              <label>
                Search
                <input type="search" placeholder="Search" />
              </label>

              <label>
                Number
                <input type="number" defaultValue={12} />
              </label>

              <label>
                Date
                <input type="date" defaultValue="2026-06-05" />
              </label>

              <label>
                Color
                <input type="color" defaultValue="#000000" />
              </label>

              <label>
                Range
                <input type="range" defaultValue={40} />
              </label>

              <label>
                Select
                <select defaultValue="two">
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                </select>
              </label>

              <label>
                Textarea
                <textarea defaultValue="A few lines of editable sample text." />
              </label>

              <label>
                <input type="checkbox" defaultChecked /> Checkbox
              </label>

              <label>
                <input name="choice" type="radio" defaultChecked /> Radio A
              </label>

              <label>
                <input name="choice" type="radio" /> Radio B
              </label>

              <progress max={100} value={45}>
                45%
              </progress>
              <meter min={0} max={100} value={72}>
                72
              </meter>

              <button type="button">Button</button>
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        </section>

        <section aria-labelledby="disclosure-title">
          <h2 id="disclosure-title">Disclosure</h2>
          <details open>
            <summary>Details summary</summary>
            <p>Details content appears here.</p>
          </details>
          <figure>
            <pre>{`+---------+
| Figure  |
+---------+`}</pre>
            <figcaption>Figure caption</figcaption>
          </figure>
          <address>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </address>
        </section>

        <footer>
          <p>End of specimen.</p>
        </footer>
      </article>

      {showControls ? <DialRoot position="top-right" defaultOpen /> : null}

      <button type="button" onClick={() => setShowControls((value) => !value)}>
        {showControls ? "Hide controls" : "Show controls"}
      </button>
    </main>
  );
}
