import imageSize from 'image-size';
import path from 'path';
import { getPlaiceholder } from 'plaiceholder';
import { Node, visit } from 'unist-util-visit';
import { promisify } from 'util';

const sizeOf = promisify(imageSize);

interface ImageNode extends Node {
  type: 'element';
  tagName: 'img';
  properties: {
    src: string;
    height?: number;
    width?: number;
    base64?: string;
  };
}

function isImageNode(node: Node): node is ImageNode {
  const img = node as ImageNode;
  return (
    img.type === 'element' &&
    img.tagName === 'img' &&
    img.properties &&
    typeof img.properties.src === 'string'
  );
}

function filterImageNode(node: ImageNode): boolean {
  return node.properties.src.startsWith('/');
}

async function addMetadata(node: ImageNode): Promise<void> {
  const res = await sizeOf(path.join(process.cwd(), 'public', node.properties.src));

  if (!res) throw Error(`Invalid image with src "${node.properties.src}"`);
  const { base64 } = await getPlaiceholder(node.properties.src, { size: 10 });

  node.properties.width = res.width;
  node.properties.height = res.height;
  node.properties.base64 = base64;
}

export default function imageMetadata() {
  return async function transformer(tree: Node): Promise<Node> {
    const imgNodes: ImageNode[] = [];

    visit(tree, 'element', (node) => {
      if (isImageNode(node) && filterImageNode(node)) {
        imgNodes.push(node);
      }
    });

    for (const node of imgNodes) {
      await addMetadata(node);
    }

    return tree;
  };
}
