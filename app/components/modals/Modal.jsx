"use client"
import React from "react";
import { createPortal } from "react-dom";
import styled from '@emotion/styled'

const OuterContainer = styled.div(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    zIndex: 100,
    backgroundColor: 'rgba(0,0,0,0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
    boxSizing: 'border-box',
    '@media (max-width: 600px)': {
        padding: 0,
    },
}))

const InnerContainer = styled.div(() => ({
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1rem',
    width: '100%',
    maxWidth: '30rem',
    boxSizing: 'border-box',
}))


export function Modal({ children, open }) {

    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    return mounted ? createPortal(
        (
            <div>
                {
                    open &&
                    <OuterContainer>
                        <InnerContainer>
                            {children}
                        </InnerContainer>
                    </OuterContainer>
                }
            </div>
        ),
        document.getElementById("modal")
    ) : null;
}

Modal.Header = styled.div(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
}));

Modal.Title = styled.h2(() => ({
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: 700,
}));

Modal.CloseButton = styled.button(() => ({
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "1.5rem",
    padding: 0,
}));

Modal.Body = styled.div(() => ({
    marginBottom: "1rem",
}));

Modal.Footer = styled.div(() => ({
    display: "flex",
    justifyContent: "flex-end",
})
);