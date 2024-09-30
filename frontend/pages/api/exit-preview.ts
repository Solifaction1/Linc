export default function handler(
  _req: any,
  res: {
    clearPreviewData: () => void;
    status: (arg0: number) => {
      (): any;
      new (): any;
      end: { (): void; new (): any };
    };
  }
) {
  // Clear the cookies set by the preview mode.
  res.clearPreviewData();

  // Send a 200-Success response to the frontend
  res.status(200).end();
}
