# Vesta

  <a href="https://vesta-main-site.vercel.app/">
    <img src="/public/images/readme/image.png" alt="Vesta" />
  </a>

##

Welcome to the official website of the Volunteer Association "Vesta" Charity Fund! We are glad you visited us and hope that our work inspires you to take part in our noble cause. Our fund is dedicated to supporting those who need it the most, particularly our brave military personnel and their families.

Mission The Volunteer Association "Vesta" Charity Fund is committed to supporting military personnel on the front lines by providing vehicles, ammunition, weapon upgrades, and other essential supplies. Additionally, we offer legal and psychological support to servicemen and veterans, their families, as well as the families of the fallen and the missing.

Our Programs

1. Support for Military Personnel. We provide essential equipment and supplies to those on the front lines, including:
<ul>
<li>Vehicles</li>
<li>Ammunition</li>
<li>Weapon upgrades</li>
<li>Other necessary supplies</li>
</ul>

2. Legal and Psychological Assistance. We offer comprehensive support to servicemen, veterans, and their families, including:
<ul>
<li>Legal advice on issues such as whether military personnel can operate a private business and the consequences of doing so. </li>
<li>Assistance with obtaining the status of a war veteran (UDB). </li>
<li>Guidance on state benefits and entitlements. Step-by-step actions for when a loved one goes missing.</li>
</ul>

3. Family Support. We assist families of the fallen and the missing by providing:
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

<!-- <details><summary>Show</summary> -->

- #### component **BurgerMenu**

The component is designed to create BurgerMenu for tablet and mobile sizes

| Prop     | Type        | Description                                           |
| -------- | ----------- | ------------------------------------------------------|
| `close`  | `() => void`| required, add the function of closing the burger menu |
| `isOpen` | `boolean`   | required, sets open state |
<hr>

- #### component **Button**

The component is for handle click with all style variants of button from layout

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `onClick` | `() => void` | -- | optional, function for handle click |
| `children` | `string` | -- | optional, button children |
| `variant` | `'primary'` `'closeModal'` `'closeMenu'` `'openTeamMember'` `'openMenu'` `'play'` `'moreProjects'` | `'primary'` | optional, variant of button style |
| `type` | `'button'` `'submit'` `'reset' ` | `'button'` | optional, type of button |
| `className` | `string` | -- | optional, custom styles |
<hr>

- #### component **LinkButton**

The component is for navigation with all variants of style from layout

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `href` | `string` | -- | required, link path to a page |
| `children` | `ReactNode` | -- | required, element`s children |
| `target` | `'string'` | -- | optional, attribute for a link |
| `rel` | `'string'` | -- | optional, attribute for a link |
| `variant` | `'primary'` `'secondary'` `'contactsHeader'` | `'primary'` | optional, variant of link style |
| `className` | `string` | -- | optional, custom styles |
<hr>

- #### component **Logo**

| Prop      | Type         |  Description |
| `onClick` | `() => void` | optional, function for handle click |
<hr>

- #### component **ScrollBox**

The component is designed to create custom scrollBox.

| Prop        | Type     | Description                 |
| ----------- | -------- | --------------------------- |
| `children`  | `ReactNode` | required, component`s children  |
| `className` | `string` | optional, add custom styles |
<hr>

- #### component **SocialMedia**

The component is designed to create SocialMedia list.

| Prop | Type | Description |
| --- | --- | --- |
| `socialMedia` | `SocialMediaItem[]` | required, sets the list of social networks |
| `lightMode` | `boolean` | required, depending on the value, a SocialMedia item of a certain color is rendered  |

SocialMediaItem:

| Prop | Type | Description |
| --- | --- | --- |
| `social` | `'Facebook'` `'Instagram'` ` 'YouTube'`  `'TikTok'` `'Twitter'` `'SoundCloud'` `'Spotify'` `'Diya'` `'YouTube Music'` | required, sets the type of social network |
| `link` | `string` | required, sets the link of social network |
<hr>

- #### component **CardList**

The component is designed to create a list of cards. 

| Prop | Type | Description |
| --- | --- | --- |
| `items` | `IItem[] or IItemTeam[]` | required, sets type of cards |
| `CardComponent` | `ElementType` | required |
| `path` | `string` | required, sets pathname of page|
| `section` | `string` | required, sets section of page |

IItem:
| Prop   | Type     | Description               |
| ------ | -------- | ------------------------- |
| `id`   | `string` | required, item`s id          |
| `name` | `string` | required, name of a partner |
| `image` | `IImageData` | required, image data|

IItemTeam:

| Prop   | Type     | Description               |
| ------ | -------- | ------------------------- |
| `name`     | `string`   | required, team member's name  |
| `text`     | `string`   | required, description for card |
| `position` | `string`   | required, member's position   |
| `status` | `string` | required, variant of team member's status |
| `socialItem` | `[]`  | required, list of team member's social networks |
| `image`    | `IImageData`   | required, image data          |

IImageData:

| Prop          | Type     | Description                   |
| ------------- | -------- | ----------------------------- |
| `attributes`  | `data: {url: string; alternativeText: string; }` | required, src and description for img |
<hr>


- #### component **DwellingCard**

The component is designed to create a dwelling card. Component receives prop "item" and its type:

| Prop | Type | Description |
| --- | --- | --- |
| `address` | `string` | required, dwelling address |
| `city` | `string` | required, dwelling city |
| `locationLink` | `string` | required, links for contacts info |
| `phone` | `string` | required, dwelling phone |
<hr>

#### **FormBlock** includes a form assembly that includes custom inputs, textarea, and checkbox

    The remark: To apply with React-Hook-Form using the library's component - <Controller />

- #### component **FormBlock**

| Prop | Type | Description |
| --- | --- | --- |
| `className` | `string` | optional, the style can be passed to manage placing the component next to others in the section |
<hr>

- #### component **FormInput**

| Prop | Type | Description |
| --- | --- | --- |
| `label` | `string` | optional, can pass text displaying for a label |
| `errorMessage` | `string or undefined` | optional, can pass text displaying for an error message |
| `className` | `string` | optional, styles can be passed for the component wrapper |
| `isFilled` | `boolean or undefined` | optional, can pass the status of filling |
| `{...rest}` | `string` | optional, any other attributes that are characteristic of the input (type, placeholder, etc) |
<hr>

- #### component **Checkbox**

| Prop | Type | Description |
| --- | --- | --- |
| `checked` | `boolean` | required, starting value for checked |
| `handleChange` | `(checked: boolean) => void` | required, the function to control the value into state in the parent component |
| `errorMessage` | `string or undefined` | optional, can pass text displaying for an error |
| `text` | `string` | required, text for the checkbox |
| `className` | `string` | optional, styles can be passed for the component wrapper |
| `{...rest}` | `string` | optional, any other attributes that are characteristic of the input (type, placeholder, etc) |
<hr>

- #### component **Textarea**

| Prop | Type | Description |
| --- | --- | --- |
| `label` | `string` | optional, can pass text displaying for a label |
| `errorMessage` | `string or undefined` | optional, can pass text displaying for an error message |
| `className` | `string` | optional, styles can be passed for the component wrapper |
| `isFilled` | `boolean or undefined` | optional, can pass the status of filling |
| `{...rest}` | `string` | optional, any other attributes that are characteristic of the textarea (placeholder, rows, cols, etc) |
<hr>

- #### component **FormModal**

1. Create state for control showing modal `const [modalOpen, setModalOpen] = useState<boolean>(false);`
2. The application example - `<FormModal/>`

| Prop | Type | Description |
| --- | --- | --- |
| `openModal` | `boolean` | required, give created state `show={openModal}` |
| `onClose` | `() => void` | required, callback with false for your components state `onClose={() => setModalOpen(false)}` |
| `title` | `string` | required, text for the FormModal title  |
| `text` | `string` | required, text for the FormModal discription |
| `isSuccessful` | `boolean` | required, set status for change title and text color |
<hr>

- #### component **NavList**

| Prop        | Type        | Description     |
| ----------- | ----------- | ------------|
| `navList`   | `NavListItem[]` | required, sets liast for navigation |
| `forFooter` | `boolean` | required, set status for style change  |
| `onClick`   | `() => void`| optional, add the function for click handler  |
<hr>

- #### component **NewsCard**

The component is designed to create a news card. Component receives prop "item" and its type:

| Prop          | Type     | Description                   |
| ------------- | -------- | ----------------------------- |
| `slug`        | `string` | required, card`s slug         |
| `date`        | `string` | required, date of news        |
| `title`       | `string` | required, title of news       |
| `text`        | `string` | required, description of news |
| `image`       | `data: INewsImageArray[]` | required, image data|

INewsImageArray type:

| Prop          | Type     | Description                   |
| ------------- | -------- | ----------------------------- |
| `attributes`  | `{url: string; alternativeText: string; }` | required, src and description for img |
<hr>

- #### component **PartnerCard**

The component is designed to create a partner card.  Component receives prop "item" and its type:

| Prop   | Type     | Description               |
| ------ | -------- | ------------------------- |
| `id`   | `string` | required, img id          |
| `name` | `string` | required, name of a partner |
| `image`       | `data: IImageDataAttributes` | required, image data|

IImageDataAttributes type:

| Prop          | Type     | Description                   |
| ------------- | -------- | ----------------------------- |
| `attributes`  | `{url: string; alternativeText: string; }` | required, src and description for img |
<hr>

- #### component **ProjectCard**

The component is designed to create a project card.

| Prop | Type | Description |
| --- | --- | --- |
| `item` | `object` | required, project data |
| `linkText` | `string` | required, button text of project card |
| `isOddCard` | `boolean` | required, for changing direction of elements (see layout) |

"item" type:

| Prop          | Type     | Description                   |
| ------------- | -------- | ----------------------------- |
| `title`       | `string` | required, title of project    |
| `slug`        | `string` | required, project card`s slug |
| `description` | `string` | required, description of project |
| `image`       | `object` | required, image data |

"image" type:

| Prop          | Type     | Description                   |
| ------------- | -------- | ----------------------------- |
| `data`  | `attributes: {url: string; alternativeText: string; }` | required, src and description for img |
<hr>

- #### component **ServiceCard**

The component is designed to create a service card.

| Prop | Type | Description |
| --- | --- | --- |
| `item` | `object` | required, service data |
| `count` | `string` | required, number of service card |
| `countAll` | `string` | required, total number of service cards |

"item" type:

| Prop          | Type     | Description                   |
| ------------- | -------- | ----------------------------- |
| `id`       | `string` | required, id of service    |
| `title`       | `string` | required, title of service    |
| `description` | `string` | required, description of service |
| `image`       | `object` | required, image data |

"image" type:

| Prop          | Type     | Description                   |
| ------------- | -------- | ----------------------------- |
| `data`  | `attributes: {url: string; alternativeText: string; }` | required, src and description for img |
<hr>

- #### component **SupportCardAbout**

The component is designed to create a support cards on About page. Component receives prop "item" and its type:

| Prop | Type | Description |
| --- | --- | --- |
| `icon` | `'balanceIcon'` `'infoIcon'` `'heartHandIcon'` | required, sets a variant of icon |
| `title`       | `string` | required, title of support card    |
| `description` | `string` | required, description of support card |
<hr>

- #### component **SupportCards**

The component is designed to create a support cards.

| Prop | Type | Description |
| --- | --- | --- |
| `data` | `ISupportProps[]` | required, array of support cards |

ISupportProps:

| Prop | Type | Description |
| --- | --- | --- |
| `id` | `number` | required, sets the id of card |
| `amountOfHelp` | `number` | required, sets the card helps amount |
| `typeOfHelp` | `string` | required, sets the card type helps |
<hr>

- #### component **TeamCard**

The component is designed to create a team member's card. Component receives prop "item" and its type:

| Prop       | Type       | Description                   |
| ---------- | ---------- | ----------------------------- |
| `id`       | `string`   | required, sets the id of card |
| `name`     | `string`   | required, team member's name  |
| `image`    | `object`   | required, image data          |
| `position` | `string`   | required, member's position   |
| `text`     | `string`   | required, description for card |
| `status` | `'vijskova_veteranka'` `'vijskovij_veteran'` `'rodina_vijskovoyi_veteranki'` `'rodina_vijskovogo_veterana'` | required, variant of team member's status |
| `socialItem` | `SocialMediaItem[]`  | optional, list of team member's social networks |

"image" type:

| Prop          | Type     | Description                   |
| ------------- | -------- | ----------------------------- |
| `data`  | `attributes: {url: string; alternativeText: string; }` | required, src and description for img |

SocialMediaItem:

| Prop | Type | Description |
| --- | --- | --- |
| `social` | `'Facebook'` `'Instagram'` ` 'YouTube'`  `'TikTok'` `'Twitter'` `'SoundCloud'` `'Spotify'` `'Diya'` `'YouTube Music'` | required, sets the type of social network |
| `link` | `string` | required, sets the link of social network |
<hr>

- #### component **TeamCardModal**

The component is designed to create a team member card's modal. 

| Prop       | Type       | Description                   |
| ---------- | ---------- | ----------------------------- |
| `openModal` | `boolean` | required, give created state `show={openModal}` |
| `onClose` | `() => void` | required, callback with false for your components state `onClose={() => setModalOpen(false)}` |
| `img`      | `string`   | required, image src          |
| `name`     | `string`   | required, team member's name  |
| `position` | `string`   | required, member's position   |
| `description`     | `string`   | required, description for card |
| `plug` | `'vijskova_veteranka'` `'vijskovij_veteran'` `'rodina_vijskovoyi_veteranki'` `'rodina_vijskovogo_veterana'` | required, variant of team member's status |
| `socialItem` | `SocialMediaItem[]`  | optional, list of team member's social networks |

"image" type:

| Prop          | Type     | Description                   |
| ------------- | -------- | ----------------------------- |
| `data`  | `attributes: {url: string; alternativeText: string; }` | required, src and description for img |

SocialMediaItem:

| Prop | Type | Description |
| --- | --- | --- |
| `social` | `'Facebook'` `'Instagram'` ` 'YouTube'`  `'TikTok'` `'Twitter'` `'SoundCloud'` `'Spotify'` `'Diya'` `'YouTube Music'` | required, sets the type of social network |
| `link` | `string` | required, sets the link of social network |
<hr>

<!-- </details> -->

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
