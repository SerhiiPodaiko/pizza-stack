import { ComponentStory, ComponentMeta } from "@storybook/react"

import {MenuItem} from "./menu-item.component"

export default {
    title: "Menu/Menu Item",
    component: MenuItem,
} as ComponentMeta<typeof MenuItem>


const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />

export const View = Template.bind({})
View.args = {
    imagePath: "/assets/pizza/pizza2.png",
    weight: 555,
    title: "Піца Мангетен",
    ingredients: "(подвйна порція грибів), Гриби, Папероні, Соус, Альфредо",
    price: 225
}
