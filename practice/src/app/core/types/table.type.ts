export interface Cell {
  key: string;
  title: string;
  widthPercent: number;
  renderCustomCell?: (value: any) => string;
}
