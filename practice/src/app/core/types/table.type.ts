export interface Cell {
  key: string;
  title: string;
  widthPercent: number;
}

export interface ObjectWithTypeCheck {
  [key: string]: any;
}
