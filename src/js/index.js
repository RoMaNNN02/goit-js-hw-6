export function validateInputs() {
    const text = document.querySelector(".input-text");
    const nums = document.querySelector(".input-nums");
    if (text.value === "" ) {
     text.value=0
    }
    if( nums.value === ""){
         nums.value = 0
    }
    return   { textLength: Number(text.value),
    numsLength: Number(nums.value)
}
    }
