"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var AdminPage = function () {
    var _a = react_1.useState({
        name: '',
        id: '',
        contact: '',
        address: ''
    }), formData = _a[0], setFormData = _a[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prevData) {
            var _a;
            return (__assign(__assign({}, prevData), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        // Validate form data here
        // Submit data to Firebase
    };
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "Admin Panel"),
        react_1["default"].createElement("form", { onSubmit: handleSubmit },
            react_1["default"].createElement("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, placeholder: "Name" }),
            react_1["default"].createElement("input", { type: "text", name: "id", value: formData.id, onChange: handleChange, placeholder: "ID" }),
            react_1["default"].createElement("input", { type: "text", name: "contact", value: formData.contact, onChange: handleChange, placeholder: "Contact" }),
            react_1["default"].createElement("input", { type: "text", name: "address", value: formData.address, onChange: handleChange, placeholder: "Address" }),
            react_1["default"].createElement("button", { type: "submit" }, "Submit"))));
};
exports["default"] = AdminPage;
