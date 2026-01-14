// TEST
// 1. Instalar: npm i vitest @vue/test-utils jsdom -D
// 2. Agregar script en package.json: "test": "vitest"
// 3. Agregar en vite.config.js

import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Home from "./Home.vue";

describe('Home', () => {
  it('renders the component correctly', () => {
    const wrapper = mount(Home);
    expect(wrapper.find('h1').text()).toBe('Bienvenido a la página principal')
  });

  it('Increments counter when button is clicked', async () => {
    const wrapper = mount(Home);
    expect(wrapper.find('#counter').text()).toContain('Counter: 1')
    await wrapper.find('#counter-btn').trigger('click');
    expect(wrapper.find('#counter').text()).toContain('Counter: 2')
  })
})