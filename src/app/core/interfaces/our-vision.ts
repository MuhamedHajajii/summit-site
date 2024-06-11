export interface OurVision {
  Seciton_image: string;
  Seciton_Title: string;
  Section_Description: string;
  content: Content[];
}
interface Content {
  Title: string;
  Description: string;
  Icon: string;
  Image?: string;
}
