# Vesta

  <a href="https://vesta-main-site.vercel.app/">
    <img src="/public/images/readme/image.png" alt="Vesta" />
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
- #### component Button

The component is for handle click with all style variants of button from layout

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `onClick` | `() => void` | -- | required, function for handle click |
| `children` | `string` | -- | optional, button children |
| `variant` | `'primary'` `'closeModal'` `'closeMenu'` `'openTeamMember'` `'openMenu'` `'play'` | `'primary'` | optional, variant of button style |
| `type` | `'button'` `'submit'` `'reset' ` | `'button'` | optional, type of button |
| `className` | `string` | -- | optional, custom styles |

- #### component Checkbox

| Prop | Type | Description |
| --- | --- | --- |
| `checked` | `boolean` | required, starting value for checked |
| `handleChange` | `function` | required, the function to control the value into state in the parent component |
| `errorMessage` | `string or undefined` | optional, can pass text displaying for an error |
| `text` | `string` | optional, text for the checkbox |
| `className` | `string` | optional, styles can be passed for the component wrapper |
| `{...rest}` | `string` | optional, any other attributes that are characteristic of the checkbox (type, etc) |

- #### component dwellingCard

The component is designed to create a dwelling card.

| Prop | Type | Description |
| --- | --- | --- |
| `city` | `string` | required, dwelling city |
| `contacts` | `{ link: string; text: string; target?: string; rel?: string }[]` | required, links for contacts info |

**FormBlock** includes a form assembly that includes custom inputs, textarea, and checkboxe

**The remark:** To apply with React-Hook-Form using the library's component - <Controller />

- #### component FormBlock

| Prop | Type | Description |
| --- | --- | --- |
| `className` | `string` | optional, the style can be passed to manage placing the component next to others in the section |

- #### component FormInput

| Prop | Type | Description |
| --- | --- | --- |
| `label` | `string` | optional, can pass text displaying for a label |
| `errorMessage` | `string or undefined` | optional, can pass text displaying for an error message |
| `className` | `string` | optional, styles can be passed for the component wrapper |
| `isFilled` | `boolean or undefined` | optional, can pass the status of filling |
| `{...rest}` | `string` | optional, any other attributes that are characteristic of the input (type, placeholder, etc) |

- #### component FormModal

1. Create state for control showing modal `const [modalOpen, setModalOpen] = useState<boolean>(false);`
2. The application example - `<FormModal/>`

| Prop | Type | Description |
| --- | --- | --- |
| `openModal` | `boolean` | required, give created state `show={openModal}` |
| `onClose` | `() => void` | required, callback with false for your components state `onClose={() => setModalOpen(false)}` |
| `title` | `string` | required, text for the Title FormModal |
| `text` | `string` | required, text for the discription FormModal |
| `isSuccessful` | `boolean` | required, set status for change title and text color |

- #### component linkButton

The component is for navigation with all variants of style from layout

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `href` | `string` | -- | required, link path to page |
| `children` | `string` | -- | required, element children |
| `variant` | `'primary'` `'secondary'` `'contacts'` | `'primary'` | optional, variant of link style |
| `rel` | `'string'` | `undefined` | optional, attribute for link |
| `target` | `'string'` | `undefined` | optional,attribute for link |
| `className` | `string` | -- | optional, custom styles |

- #### component newsCard

The component is designed to create a news card.

| Prop          | Type     | Description                   |
| ------------- | -------- | ----------------------------- |
| `id`          | `string` | required, card id             |
| `img`         | `string` | required, img src             |
| `imgAlt`      | `string` | required, description for img |
| `date`        | `string` | required, date of news        |
| `title`       | `string` | required, title of news       |
| `description` | `string` | required, description of news |

- #### component partnerCard

The component is designed to create a partner card.

| Prop   | Type     | Description               |
| ------ | -------- | ------------------------- |
| `img`  | `string` | required, img src         |
| `name` | `string` | required, name of partner |

- #### component projectCard

The component is designed to create a project card.

| Prop | Type | Description |
| --- | --- | --- |
| `id` | `string` | required, project id |
| `img` | `string` | required, img src |
| `imgAlt` | `string` | required, description for img |
| `title` | `string` | required, title of project |
| `description` | `string` | required, description of project |
| `linkText` | `string` | required, button text of project card |
| `isOddCard` | `boolean` | required, for changing direction of elements (see layout) |

- #### component scrollBox

The component is designed to create custom scrollBox.

| Prop        | Type     | Description                 |
| ----------- | -------- | --------------------------- |
| `children`  | `string` | required, element children  |
| `className` | `string` | optional, add custom styles |

- #### component ServiceCard

The component is designed to create a service card.

| Prop       | Type     | Description                               |
| ---------- | -------- | ----------------------------------------- |
| `title`    | `string` | required, sets the title                  |
| `src`      | `string` | required, sets the src of image           |
| `alt`      | `string` | required, sets the alt of image           |
| `count`    | `string` | required, sets the count of service.      |
| `countAll` | `string` | required, sets the count of all services. |

- #### component supportCards

The component is designed to create a supports card.

| Prop | Type | Description |
| --- | --- | --- |
| `supportsCards` | `massive` | required, massive include :id, amountOfHelp, typeOfHelp |
| `id` | `number` | required, sets the id of card |
| `amountOfHelp` | `number` | required, sets the card helps amount |
| `typeOfHelp` | `string` | required, sets the card type helps |

- #### component TeamCard

The component is designed to create a team's card.

| Prop       | Type       | Description                   |
| ---------- | ---------- | ----------------------------- |
| `name`     | `string`   | required, team member's name  |
| `src`      | `string`   | required, img src             |
| `alt`      | `string`   | required, description for img |
| `position` | `string`   | required, member's position   |
| `onClick`  | `()=>void` | optional, function if needed  |

- #### component Textarea

| Prop | Type | Description |
| --- | --- | --- |
| `label` | `string` | optional, can pass text displaying for a label |
| `errorMessage` | `string or undefined` | optional, can pass text displaying for an error message |
| `className` | `string` | optional, styles can be passed for the component wrapper |
| `isFilled` | `boolean or undefined` | optional, can pass the status of filling |
| `{...rest}` | `string` | optional, any other attributes that are characteristic of the textarea (placeholder, rows, cols, etc) |

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
