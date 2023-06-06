export {}
declare global { 
  interface IPanel {
    children: React.ReactNode;
    className: ReactDOM
    onClick: () => void

  }
}