"use client";
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
var SignIn = function () {
    var _a = react_1.useState({
        name: '',
        id: '',
        contact: '',
        address: ''
    }), formData = _a[0], setFormData = _a[1];
    var _b = react_1.useState({
        name: '',
        id: '',
        contact: '',
        address: ''
    }), errors = _b[0], setErrors = _b[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prevData) {
            var _a;
            return (__assign(__assign({}, prevData), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        var newErrors = {
            name: '',
            id: '',
            contact: '',
            address: ''
        };
        if (!formData.name) {
            newErrors.name = 'Name is required';
        }
        if (!formData.id) {
            newErrors.id = 'ID is required';
        }
        if (!formData.contact) {
            newErrors.contact = 'Contact is required';
        }
        if (!formData.address) {
            newErrors.address = 'Address is required';
        }
        setErrors(newErrors);
        if (Object.values(newErrors).every(function (error) { return error === ''; })) {
            // All fields are valid, submit the form
            // You can add your Firebase submission logic here
            console.log('Form submitted:', formData);
        }
    };
    return (react_1["default"].createElement("div", { className: "container mx-auto mt-8 w-full max-w-lg relative" },
        react_1["default"].createElement("h1", { className: "text-2xl font-bold mb-4 text-center text-sky-600 leading-10 underline md:underline-offset-8 md:text-sky-800" }, "User Registration Admin Panel Form"),
        "      ",
        react_1["default"].createElement("form", { onSubmit: handleSubmit, className: "bg-white shadow-md rounded px-8 py-8  pt-6 pb-8 mb-4" },
            react_1["default"].createElement("label", { htmlFor: "id", className: "block mt-6 font-extrabold text-2xl text-black" }, "Name"),
            react_1["default"].createElement("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, placeholder: "Name", className: "border border-gray-300 rounded px-3 py-2 w-full " }),
            errors.name && react_1["default"].createElement("p", { className: "text-red-500" }, errors.name),
            react_1["default"].createElement("label", { htmlFor: "id", className: "block mt-6 font-extrabold text-2xl text-black" }, "ID"),
            react_1["default"].createElement("input", { type: "text", name: "id", value: formData.id, onChange: handleChange, placeholder: "ID", className: "border border-gray-300 rounded px-3 py-2 w-full " }),
            errors.id && react_1["default"].createElement("p", { className: "text-red-500" }, errors.id),
            react_1["default"].createElement("label", { htmlFor: "id", className: "block mt-6 font-extrabold text-2xl text-black" }, "Contact"),
            react_1["default"].createElement("input", { type: "text", name: "contact", value: formData.contact, onChange: handleChange, placeholder: "Contact", className: "border border-gray-300 rounded px-3 py-2 w-full " }),
            errors.contact && react_1["default"].createElement("p", { className: "text-red-500" }, errors.contact),
            react_1["default"].createElement("label", { htmlFor: "id", className: "block mt-6 font-extrabold text-2xl text-black" }, "Address"),
            react_1["default"].createElement("input", { type: "text", name: "address", value: formData.address, onChange: handleChange, placeholder: "Address", className: "border border-gray-300 rounded px-3 py-2 w-full " }),
            errors.address && react_1["default"].createElement("p", { className: "text-red-500" }, errors.address),
            react_1["default"].createElement("button", { type: "submit", className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-10" }, "Submit"))));
};
exports["default"] = SignIn;
