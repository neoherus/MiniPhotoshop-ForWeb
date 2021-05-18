import { Flex, View } from '@adobe/react-spectrum';
import { useActiveDocument } from '@store';
import Canvas from '@Canvas';

export default function DocumentWindow() {
  const activeDocument = useActiveDocument()!;

  return (
    <Flex flexGrow={1} width={0} direction="column">
      <View paddingX="size-200" paddingY="size-100">
        {activeDocument.name}
      </View>
      <Canvas />
      <View paddingX="size-100" paddingY="size-50">
        {/* eslint-disable-next-line i18next/no-literal-string */}
        {activeDocument.size.width}×{activeDocument.size.height}
      </View>
    </Flex>
  );
}
