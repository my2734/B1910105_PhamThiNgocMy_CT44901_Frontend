<template>
    <div v-if="contact" class="page">
        <h4>Thêm liên hệ</h4>
        <ContactForm
            :contact="contact"
            @submit:contact="addContact"
        />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
    components: {
        ContactForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            contact: {
                
            },
            message: "",
        };
    },
    methods: {
        async addContact(data) {
            try {
                await ContactService.create(data);
                console.log("hello ca nha yue");
                this.message = "Liên hệ được tạo thành công.";
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        // this.getContact(this.id);
        this.message = "";
    },
};
</script>