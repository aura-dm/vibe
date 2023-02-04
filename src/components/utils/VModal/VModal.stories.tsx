import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

import VButton from "../../inputs/VButton";
import VModal from "./VModal";

export default {
  title: "Components/Utils/VModal",
  component: VModal,
} as ComponentMeta<typeof VModal>;

const Template: ComponentStory<typeof VModal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ height: "400px" }}>
      <VButton onClick={() => setIsOpen(true)}>Open modal</VButton>
      <VModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <VModal.Header>
          <VModal.Title>Modal example</VModal.Title>
          <VModal.CloseButton onClick={() => setIsOpen(false)} />
        </VModal.Header>
        <VModal.Content>Modal content</VModal.Content>
      </VModal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
