import { ComponentStory, ComponentMeta } from "@storybook/react"

import {MenuList} from "./menu-list.component"
import pizzaData from "@app/mocks/pizza.json"

export default {
    title: "Menu/Menu List",
    component: MenuList,
} as ComponentMeta<typeof MenuList>


const Template: ComponentStory<typeof MenuList> = (args) => <MenuList {...args} />

export const View = Template.bind({})
View.args = {
    items: pizzaData
}
