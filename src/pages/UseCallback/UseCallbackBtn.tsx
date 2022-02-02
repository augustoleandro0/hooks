import React, { ReactNode } from 'react';

interface UseCallbackBtnProps {
  children?: ReactNode;
  inc: (arg0: number) => void;
}

function UseCallbackBtn({ children, inc }: UseCallbackBtnProps) {
  return (
    <>
      <div>
          <button type="submit" onClick={() => inc(6)}>+ 6</button>
          <button type="submit" onClick={() => inc(12)}>+ 12</button>
          <button type="submit" onClick={() => inc(18)}>+ 18</button>
      </div>
      {children}
    </>
  );
}
//React memo fara com que o botão seja renderizado e memorizado no cash.
export default React.memo(UseCallbackBtn)
