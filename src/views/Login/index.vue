<template>
  <div class="app">
    <el-form ref="formRef" :model="form" :rules="rules" class="demo-ruleForm">
      <el-form-item label="姓名" prop="userName">
        <el-input v-model="form.userName" type="text" />
      </el-form-item>
      <el-form-item label="密码" prop="userPwd">
        <el-input v-model="form.userPwd" type="text" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add(formRef)">确定</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { userLogin } from "@/utils/userLogin";

// import type { FormInstance } from "element-plus";

const formRef = ref();
const loginAss = ref();

const form = reactive({
  userName: "admin",
  userPwd: "123456",
  token: "",
});

const rules = {
  userName: [{ required: true, message: "用户名称不能为空", trigger: "blur" }],
  userPwd: [{ required: true, message: "用户密码不能为空", trigger: "blur" }],
};

const add = (formEl) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      userLogin(form).then((res) => {
        console.log(res);
        form.token = res.token;
      });
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

// const resetForm = (formEl) => {
// if (!formEl) return;
// formEl.resetFields();
// };
</script>

<style scoped lang="scss">
.app {
  width: 450px;
  height: 250px;
  border: 1px solid red;
  margin: 100px auto;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
}
</style>
