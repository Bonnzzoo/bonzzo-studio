"use client";

export default function CustomCursor() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
        /* Default Cursor - Visible across all devices */
        body, body * {
          cursor: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2732%27%20height%3D%2732%27%20viewBox%3D%270%200%2032%2032%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Ccircle%20cx%3D%2716%27%20cy%3D%2716%27%20r%3D%2712%27%20fill%3D%27none%27%20stroke%3D%27rgba%280%2C0%2C0%2C0.3%29%27%20stroke-width%3D%272.5%27%20%2F%3E%3Ccircle%20cx%3D%2716%27%20cy%3D%2716%27%20r%3D%2712%27%20fill%3D%27none%27%20stroke%3D%27rgba%28255%2C255%2C255%2C0.8%29%27%20stroke-width%3D%271.5%27%20%2F%3E%3Ccircle%20cx%3D%2716%27%20cy%3D%2716%27%20r%3D%274%27%20fill%3D%27rgba%280%2C0%2C0%2C0.3%29%27%20%2F%3E%3Ccircle%20cx%3D%2716%27%20cy%3D%2716%27%20r%3D%273%27%20fill%3D%27white%27%20%2F%3E%3C%2Fsvg%3E") 16 16, auto;
        }

        /* Hover Cursor - For links and buttons */
        body a, body button, body [role="button"], body .cursor-hover,
        body a *, body button *, body [role="button"] *, body .cursor-hover * {
          cursor: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2732%27%20height%3D%2732%27%20viewBox%3D%270%200%2032%2032%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Ccircle%20cx%3D%2716%27%20cy%3D%2716%27%20r%3D%2714%27%20fill%3D%27rgba%28255%2C255%2C255%2C0.1%29%27%20stroke%3D%27rgba%280%2C0%2C0%2C0.3%29%27%20stroke-width%3D%272.5%27%20%2F%3E%3Ccircle%20cx%3D%2716%27%20cy%3D%2716%27%20r%3D%2714%27%20fill%3D%27none%27%20stroke%3D%27rgba%28255%2C255%2C255%2C1%29%27%20stroke-width%3D%271.5%27%20%2F%3E%3Ccircle%20cx%3D%2716%27%20cy%3D%2716%27%20r%3D%276%27%20fill%3D%27rgba%280%2C0%2C0%2C0.3%29%27%20%2F%3E%3Ccircle%20cx%3D%2716%27%20cy%3D%2716%27%20r%3D%275%27%20fill%3D%27white%27%20%2F%3E%3C%2Fsvg%3E") 16 16, pointer !important;
        }
        
        /* Text Cursor */
        body p, body h1, body h2, body h3, body h4, body h5, body h6, body span {
          cursor: text;
        }
      `
    }} />
  );
}
