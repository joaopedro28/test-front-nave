import { extend, localize, configure } from "vee-validate";
import { required, required_if, email, min, regex, confirmed } from "vee-validate/dist/rules";
import pt_BR from 'vee-validate/dist/locale/pt_BR.json';

// Vue.use(extend, {
//   inject: true
// });

configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid'
    }
})

// Install required rule.
extend("required", required);


// Install email rule.
extend("email", email);

// Install regex rule.
extend("regex", regex);

extend("confirmed", confirmed);


extend('numberpositive', (value) => {
    if (numberpositiveValidate(value)) {
        return true;
    }
    return 'O campo {_field_} é inválido.';
});

localize('pt_BR', pt_BR);
