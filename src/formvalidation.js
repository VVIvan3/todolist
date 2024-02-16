export default function validate() {
    const itemsToValidate = document.querySelectorAll('.todoinput');
    for (const item of itemsToValidate) {
        if (item.value.length < 1) return false;
    }
    return true;
}