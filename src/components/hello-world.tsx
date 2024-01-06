import { component$ } from "@builder.io/qwik";

export const HelloWorld = component$((props: { name: string }) => {
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
});
