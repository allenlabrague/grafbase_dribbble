"use client";

import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Modal = ({ children }) => {
  const layout = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.push("/");
  }, [router]);

  const handleClick = useCallback(
    (e) => {
      if (e.target === layout.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, router]
  );

  return (
    <div ref={layout} className="modal" onClick={handleClick}>
      <button
        type="button"
        onClick={onDismiss}
        className="absolute top-4 right-8"
      >
        <Image src="/close.svg" width="17" height="17" alt="close" />
      </button>
      <div ref={wrapper} className="modal_wrapper">
        {children}
      </div>
    </div>
  );
};

export default Modal;
