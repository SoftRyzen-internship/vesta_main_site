# Vesta

  <a href="https://vesta-main-site.vercel.app/">
    <img src="/public/images/read-me/image.png" alt="Vesta" />
  </a>

##

Welcome Welcome to the official website of the Volunteer Association "Vesta" Charity Fund! We are glad you visited us and hope that our work inspires you to take part in our noble cause. Our fund is dedicated to supporting those who need it the most, particularly our brave military personnel and their families.

Mission The Volunteer Association "Vesta" Charity Fund is committed to supporting military personnel on the front lines by providing vehicles, ammunition, weapon upgrades, and other essential supplies. Additionally, we offer legal and psychological support to servicemen and veterans, their families, as well as the families of the fallen and the missing.

Our Programs

1. Support for Military Personnel We provide essential equipment and supplies to those on the front lines, including:
<ul>
<li>Vehicles</li>
<li>Ammunition</li>
<li>Weapon upgrades</li>
<li>Other necessary supplies</li>
</ul>

2. Legal and Psychological Assistance We offer comprehensive support to servicemen, veterans, and their families, including:
<ul>
<li>Legal advice on issues such as whether military personnel can operate a private business and the consequences of doing so. </li>
<li>Assistance with obtaining the status of a war veteran (UDB). </li>
<li>Guidance on state benefits and entitlements. Step-by-step actions for when a loved one goes missing.</li>
</ul>

3. Family Support We assist families of the fallen and the missing by providing:
<ul>
<li>Psychological support and counseling.</li>
<li>Legal guidance and assistance with state benefits and entitlements.</li>
</ul>

[Link](https://www.figma.com/design/QogABuJsAI427YSYSu2WHl/Vesta?node-id=405-917&t=sJ1ZHq5xfdSjzmDX-0) to design layout

##

<!-- <details> -->
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#features">Features</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#technologies">Technologies</a></li>
    <li><a href="#components-api">Components API</a></li>
  </ol>
<!-- </details> -->

## Features

- Next.js offers server-side rendering and static site generation, ensuring fast and SEO-friendly pages.

- Next.js provides a simple and intuitive routing system, making navigation within your application simple.

- Tailwind CSS promotes a utility-first approach for quick and customized styling.

- TypeScript provides static typing for enhanced code quality and maintainability.

- Sanity's headless CMS allows for flexible content management and real-time collaboration.

## Getting Started

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/SoftRyzen-internship/vesta_main_site.git

# Go into the repository
$ cd vesta_main_site

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

> **Note** If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Components API

<details><summary>Show</summary>

- Logo

| Prop | Default | Description |
| --- | --- | --- |
| `path` | -- | required, `header` or `footer` and styled is changing |
| `className` | `""` | optinal, `string` add tailwind styles |

- ScrollLink

| Prop | Default | Description |
| --- | --- | --- |
| `label` | -- | required, `string` button's text |
| `href` | -- | required, `string` path to page or name of id section for scroll, examples 'policy' or '#sectionId' |
| `variant` | -- | required, `string` 'primary', 'secondary', 'primary2' see UiKIt (Buttons), 'navlink' for NavBar (desktop, mobile), "policy" for policy page; |
| `className` | `""` | optinal, `string` add tailwind styles |

- Button

| Prop | Default | Description |
| --- | --- | --- |
| `label` | -- | required, `string` button's text |
| `variant` | -- | required, `string` 'primary' see UiKIt (Buttons), 'readmore' for comments button; |
| `type` | `button` | optinal, `string` 'button''submit' |
| `onCLick` | `undefined` | optinal, `() => void` , add the function |
| `className` | `""` | optinal, `string` add tailwind styles |

- Modal

| Prop | Default | Description |
| --- | --- | --- |
| `children` | -- | optional, `ReactNode` content of the modal window with own styles |
| `isOpen` | -- | required, `boolean` - current state of modal |
| `close` | `undefined` | required, `() => void`, add the function for closeModal |
| `variant` | -- | required, `string` "comments" - for comments modal, "burger" - for burgerMenu, "simple" - for other modals |
| `className` | `""` | optinal, `string` add tailwind styles |

- ProductAction

| Prop | Default | Description |
| --- | --- | --- |
| `data` | menu | Taka data productAction with massive :id: `number`, action: `string` |

- Telephones

| Prop | Default | Description |
| --- | --- | --- |
| `path` | -- | required, `contacts` or `footer` and styled is changing |
| `className` | `""` | optinal, `string` add tailwind styles |

- CardsBenefits

| Prop   | Default | Description                       |
| ------ | ------- | --------------------------------- |
| `icon` | --      | `JSX.Element`and show icons       |
| `text` | ---     | `string`, text can change in data |
| `id`   | ---     | `number`, text can change in data |

- SocialMedia

| Prop        | Default | Description                              |
| ----------- | ------- | ---------------------------------------- |
| `section`   | menu    | required, `menu`, `contacts` or `footer` |
| `className` | --      | optinal, `string` add tailwind styles    |

- ProductCard

| Prop | Default | Description |
| --- | --- | --- |
| `img` | - | required, `string`, image url |
| `imgBg` | - | required, `beans`, `wheat`, `vegetables`, `corn`, or `seaweed` |
| `alt` | - | required, `string`, image description |
| `name` | - | required, `string`, product name |
| `descriptionItems` | - | required, `string`,product description |
| `link` | - | required, `string`, link to product page |
| `buttonText` | - | required, `string`, text for button |

- ProductPreference

| Prop | Default | Description |
| --- | --- | --- |
| `data` | menu | Taka data productPreference with massive :id: `number`, preference: `string` |

</details>

## Technologies

  <ul>
        <li>
          <a
            href="https://nextjs.org/"
          >
            <img
              src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"
              alt="Next"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.typescriptlang.org/"
          >
            <img
              src="https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript"
              alt="TypeScript"
            />
          </a>
        </li>
        <li>
          <a
            href="https://tailwindcss.com/"
          >
            <img
              src="https://img.shields.io/badge/tailwind-black?style=for-the-badge&logo=tailwindcss"
              alt="Tailwind CSS"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.sanity.io/"
          >
            <img
              src="https://img.shields.io/badge/sanity-black?style=for-the-badge&logo=sanity"
              alt="Sanity"
            />
          </a>
        </li>
        <li>
          <a
            href="https://react-hook-form.com/"
          >
            <img
              src="https://img.shields.io/badge/react_hook_form-black?style=for-the-badge&logo=react%20hook%20form"
              alt="React hook form"
            />
          </a>
        </li>
        <li>
          <a
            href="https://headlessui.com/"
          >
            <img
              src="https://img.shields.io/badge/headlessui-black?style=for-the-badge&logo=headlessui&logoColor=blue"
              alt="Headless UI"
            />
          </a>
        </li>
      </ul>
