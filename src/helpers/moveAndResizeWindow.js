export default function moveAndResizeWindow(elementId) {
    const el = document.getElementById(elementId);

    // Handle Moving a Window
    const windowHeader = el.querySelector('.window-header');
    windowHeader.addEventListener('mousedown', handleWindowMove);

    function handleWindowMove(mousedownEvent) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    
        let prevX = mousedownEvent.clientX;
        let prevY = mousedownEvent.clientY;
    
        function handleMouseMove(mousemoveEvent) {
            let newX = prevX - mousemoveEvent.clientX;
            let newY = prevY - mousemoveEvent.clientY;
    
            const rect = el.getBoundingClientRect();
            el.style.left = rect.left - newX + 'px';
            el.style.top = rect.top - newY + 'px';
    
            prevX = mousemoveEvent.clientX;
            prevY = mousemoveEvent.clientY;
        }
        
        function handleMouseUp() {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }

    // Handle Resizing a Window
    const resizer = el.querySelector('[data-testid="resizeHandle"]');
    resizer.addEventListener('mousedown', handleWindowResize);

    function handleWindowResize(mousedownEvent) {
        let prevX = mousedownEvent.clientX;
        let prevY = mousedownEvent.clientY;

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        function handleMouseMove(mousemoveEvent) {
            const rect = el.getBoundingClientRect();

            el.style.width = rect.width - (prevX - mousemoveEvent.clientX) + "px";
            el.style.height = rect.height - (prevY - mousemoveEvent.clientY) + "px";

            prevX = mousemoveEvent.clientX;
            prevY = mousemoveEvent.clientY;
        }

        function handleMouseUp() {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);    
        }
    }

    return {
        windowHeader,
        handleWindowMove
    };
};
