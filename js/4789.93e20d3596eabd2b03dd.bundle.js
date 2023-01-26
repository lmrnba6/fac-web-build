"use strict";
(self["webpackChunksmart_interact"] = self["webpackChunksmart_interact"] || []).push([[4789],{

/***/ 82433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": function() { return /* binding */ tableRowsPerPage; }
/* harmony export */ });
var tableRowsPerPage = [10, 20, 50, 100];

/***/ }),

/***/ 84789:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ chat; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(42982);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(70885);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(73935);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/react-perfect-scrollbar/lib/index.js
var lib = __webpack_require__(51964);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/file.js
var icons_file = __webpack_require__(36694);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/user-check.js
var user_check = __webpack_require__(28017);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/check.js
var check = __webpack_require__(46445);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/message-square.js
var message_square = __webpack_require__(81912);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/menu.js
var menu = __webpack_require__(90408);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/more-vertical.js
var more_vertical = __webpack_require__(79366);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x-circle.js
var x_circle = __webpack_require__(13777);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/arrow-right-circle.js
var arrow_right_circle = __webpack_require__(35221);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/image.js
var icons_image = __webpack_require__(7839);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/send.js
var send = __webpack_require__(11414);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/UncontrolledDropdown.js
var UncontrolledDropdown = __webpack_require__(83823);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/DropdownToggle.js
var DropdownToggle = __webpack_require__(65497);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/DropdownMenu.js
var DropdownMenu = __webpack_require__(42365);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/DropdownItem.js
var DropdownItem = __webpack_require__(98227);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Button.js
var Button = __webpack_require__(97975);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Form.js
var Form = __webpack_require__(15538);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/InputGroup.js
var InputGroup = __webpack_require__(69618);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Input.js
var Input = __webpack_require__(609);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/InputGroupAddon.js
var InputGroupAddon = __webpack_require__(88822);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/InputGroupText.js
var InputGroupText = __webpack_require__(51566);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Label.js
var Label = __webpack_require__(67954);
// EXTERNAL MODULE: ./src/@core/components/avatar/index.js
var avatar = __webpack_require__(68138);
// EXTERNAL MODULE: ./src/assets/images/avatars/avatar-blank.png
var avatar_blank = __webpack_require__(76930);
// EXTERNAL MODULE: ./src/api/utlis.js
var utlis = __webpack_require__(16550);
// EXTERNAL MODULE: ./src/configs/api-urls.js
var api_urls = __webpack_require__(88295);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(55678);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 13 modules
var es = __webpack_require__(95998);
// EXTERNAL MODULE: ./src/utility/Utils.js
var Utils = __webpack_require__(16724);
// EXTERNAL MODULE: ./node_modules/react-viewer/dist/index.js
var dist = __webpack_require__(51285);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ./node_modules/react-router-dom/node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(85256);
// EXTERNAL MODULE: ./src/views/customComponents/Alert.js
var Alert = __webpack_require__(16714);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/useIntl.js
var useIntl = __webpack_require__(86896);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var components_message = __webpack_require__(44012);
// EXTERNAL MODULE: ./src/views/customComponents/Toast.js
var Toast = __webpack_require__(25976);
// EXTERNAL MODULE: ./src/views/customComponents/TimeAgo.js
var TimeAgo = __webpack_require__(32627);
// EXTERNAL MODULE: ./node_modules/dompurify/dist/purify.js
var purify = __webpack_require__(27856);
var purify_default = /*#__PURE__*/__webpack_require__.n(purify);
// EXTERNAL MODULE: ./src/configs/actions.js
var actions = __webpack_require__(56176);
// EXTERNAL MODULE: ./src/configs/subjects.js
var subjects = __webpack_require__(14322);
// EXTERNAL MODULE: ./src/utility/context/Can.js
var Can = __webpack_require__(6756);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/views/apps/chat/Chat.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




























var ChatLog = function ChatLog(props) {
  // ** Props & Store
  var loadMore = props.loadMore,
      handleUser = props.handleUser,
      handleSidebar = props.handleSidebar,
      userSidebarLeft = props.userSidebarLeft,
      selectedUser = props.selectedUser,
      messages = props.messages,
      setUsers = props.setUsers,
      users = props.users,
      setSelectedUser = props.setSelectedUser; // ** Refs & Dispatch

  var chatArea = (0,react.useRef)(null);

  var _useState = (0,react.useState)(null),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      image = _useState2[0],
      setImage = _useState2[1];

  var _useState3 = (0,react.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      file = _useState4[0],
      setFile = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      visible = _useState6[0],
      setVisible = _useState6[1];

  var _useState7 = (0,react.useState)(""),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      photo = _useState8[0],
      setPhoto = _useState8[1];

  var history = (0,react_router/* useHistory */.k6)(); // ** State

  var _useState9 = (0,react.useState)(""),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      message = _useState10[0],
      setMessage = _useState10[1];

  var dispatch = (0,es/* useDispatch */.I0)();
  var intl = (0,useIntl/* default */.Z)();
  var store = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  });
  var ability = (0,react.useContext)(Can/* AbilityContext */.v); // ** Scroll to chat bottom

  var scrollToBottom = function scrollToBottom() {
    var chatContainer = react_dom.findDOMNode(chatArea.current);

    if (chatContainer) {
      chatContainer.scrollTop = Number.MAX_SAFE_INTEGER;
    }
  }; // ** If user chat is not empty scrollToBottom


  (0,react.useEffect)(function () {
    var selectedUserLen = messages.length;

    if (selectedUserLen) {
      setTimeout(function () {
        return scrollToBottom();
      }, 500);
    }
  }, [selectedUser, messages]); // ** Renders user chat

  var renderChats = function renderChats() {
    return messages.map(function (item, index) {
      var _store$userData, _store$userData2;

      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classnames_default()("chat", {
          "chat-left": item.sender !== ((_store$userData = store.userData) === null || _store$userData === void 0 ? void 0 : _store$userData.id)
        }),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "chat-avatar",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
            className: "box-shadow-1 cursor-pointer",
            img: item.fromPicture || avatar_blank
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "chat-body",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "chat-content",
            children: [item.message && /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: purify_default().sanitize(replaceURLWithHTMLLinks(item.message))
              }
            }), item.image && /*#__PURE__*/(0,jsx_runtime.jsx)("img", {
              className: "cursor-pointer",
              onClick: function onClick() {
                setPhoto(item.image);
                setVisible(true);
              },
              src: item.image,
              width: 100,
              alt: ""
            }), item.file && /*#__PURE__*/(0,jsx_runtime.jsx)(icons_file/* default */.Z, {
              className: "cursor-pointer",
              size: 30
            }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              className: "small text-muted text-right w-100",
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: "mr-50",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(TimeAgo/* default */.Z, {
                  date: item.createdAt
                })
              }), item.sender === ((_store$userData2 = store.userData) === null || _store$userData2 === void 0 ? void 0 : _store$userData2.id) && /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: item.read ? /*#__PURE__*/(0,jsx_runtime.jsx)(user_check/* default */.Z, {
                  size: 12
                }) : /*#__PURE__*/(0,jsx_runtime.jsx)(check/* default */.Z, {
                  size: 12
                })
              })]
            })]
          }, item.id)
        })]
      }, index);
    });
  };

  var handleAvatarClick = function handleAvatarClick(obj) {
    history.push("/apps/profile/" + obj._id);
  };

  var handleStartConversation = function handleStartConversation() {
    if (!Object.keys(selectedUser).length && !userSidebarLeft && window.innerWidth <= 1200) {
      handleSidebar();
    }
  };

  var handleSend = function handleSend(body) {
    setMessage("");
    setImage("");
    handleUser(selectedUser, body);
    setTimeout(function () {
      return scrollToBottom();
    }, 500);
  };

  var handleDeleteConversation = function handleDeleteConversation() {
    setMessage("");
    setImage("");
    handleUser({});
    setUsers(users.filter(function (u) {
      return u.user._id !== selectedUser._id;
    }));
  };

  var handleBlock = function handleBlock() {
    setMessage("");
    setImage("");
    handleUser({});
    var user = users.find(function (u) {
      return u.user._id === selectedUser._id;
    });

    if (user) {
      user.stopped = true;
    }

    setUsers((0,toConsumableArray/* default */.Z)(users));
    setSelectedUser(_objectSpread(_objectSpread({}, selectedUser), {}, {
      stopped: true
    }));
  };

  var handleError = function handleError(e) {
    setMessage("");
    setImage("");

    if (e.code === 420) {
      react_toastify_esm/* toast.warn */.Am.warn( /*#__PURE__*/(0,jsx_runtime.jsx)(Toast/* default */.Z, {
        type: "warning",
        message: "conversationBlocked"
      }), {
        transition: react_toastify_esm/* Bounce */.sm,
        hideProgressBar: false,
        autoClose: 6000
      });
    } else {
      react_toastify_esm/* toast.error */.Am.error( /*#__PURE__*/(0,jsx_runtime.jsx)(Toast/* default */.Z, {
        type: "error",
        message: "somethingWrong"
      }), {
        transition: react_toastify_esm/* Bounce */.sm,
        hideProgressBar: false,
        autoClose: 6000
      });
    }
  }; // ** Sends New Msg


  var handleSendMsg = function handleSendMsg(e) {
    e.preventDefault();

    if (message || image) {
      var _store$userData3, _store$userData4;

      var body = {
        message: message.trim(),
        sender: (_store$userData3 = store.userData) === null || _store$userData3 === void 0 ? void 0 : _store$userData3.id,
        from: (_store$userData4 = store.userData) === null || _store$userData4 === void 0 ? void 0 : _store$userData4.id,
        to: selectedUser._id,
        image: image
      };
      (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* MESSAGE_URL */.lv, body], true, react_toastify_esm/* toast */.Am, dispatch, null, null, function () {
        return handleSend(body);
      }, handleError);
    }
  };

  var onChange = function onChange(e) {
    (0,Utils/* uploadFiles */.IL)(e, react_toastify_esm/* toast */.Am, dispatch).then(function (result) {
      return setImage(result.files[0].data);
    });
    setTimeout(function () {
      return scrollToBottom();
    }, 100);
  };

  var blockConversation = function blockConversation() {
    (0,Alert/* SweetAlert */.o)(intl.formatMessage({
      id: "block"
    }), intl.formatMessage({
      id: "blockMessageQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        var _store$userData5;

        (0,utlis/* apiCall */.k_)(utlis/* insert */.$T, [api_urls/* MESSAGE_BLOCK_URL */.Ye, {
          from: (_store$userData5 = store.userData) === null || _store$userData5 === void 0 ? void 0 : _store$userData5.id,
          to: selectedUser._id
        }], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", handleBlock, null);
      }
    });
  };

  var deleteConversation = function deleteConversation() {
    (0,Alert/* SweetAlert */.o)(intl.formatMessage({
      id: "deleteConversation"
    }), intl.formatMessage({
      id: "deleteAllConversationQuestion"
    }), "warning", true, intl.formatMessage({
      id: "yes"
    }), intl.formatMessage({
      id: "no"
    })).then(function (res) {
      if (res.value) {
        (0,utlis/* apiCall */.k_)(utlis/* remove */.Od, [api_urls/* MESSAGE_URL */.lv, selectedUser._id], true, react_toastify_esm/* toast */.Am, dispatch, null, "somethingWrong", handleDeleteConversation, null);
      }
    });
  }; // ** ChatWrapper tag based on chat's length


  var ChatWrapper = selectedUser ? (lib_default()) : "div";

  function replaceURLWithHTMLLinks(text) {
    var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    return text.replace(exp, "<a  rel=\"noopener noreferrer\" class=\"text-info\" href='$1' target=\"_blank\">$1</a>");
  }

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "chat-app-window",
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)((dist_default()), {
      visible: visible,
      onClose: function onClose() {
        setVisible(false);
        setPhoto("");
      },
      zIndex: 999999999,
      images: [{
        src: photo,
        alt: "chat"
      }]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()("start-chat-area", {
        "d-none": selectedUser._id
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "start-chat-icon mb-1",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(message_square/* default */.Z, {})
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
        className: "text-white bg-primary sidebar-toggle start-chat-text",
        onClick: handleStartConversation,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
          id: "startConversation"
        })
      })]
    }), selectedUser._id ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: classnames_default()("active-chat", {
        "d-none": selectedUser === null
      }),
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "chat-navbar",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
          className: "chat-header",
          children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex align-items-center",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "sidebar-toggle d-block d-lg-none mr-1",
              onClick: handleSidebar,
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(menu/* default */.Z, {
                size: 21
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
              imgHeight: "36",
              imgWidth: "36",
              img: selectedUser.profilePicture || avatar_blank // status={selectedUser.contact.status}
              ,
              className: "avatar-border user-profile-toggle m-0 mr-1" // onClick={() => handleAvatarClick(selectedUser)}

            }), /*#__PURE__*/(0,jsx_runtime.jsx)("h6", {
              className: "mb-0 text-capitalize",
              children: selectedUser.name
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "d-flex align-items-center",
            children: /*#__PURE__*/(0,jsx_runtime.jsxs)(UncontrolledDropdown/* default */.Z, {
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DropdownToggle/* default */.Z, {
                className: "btn-icon",
                color: "transparent",
                size: "sm",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(more_vertical/* default */.Z, {
                  size: "18"
                })
              }), /*#__PURE__*/(0,jsx_runtime.jsxs)(DropdownMenu/* default */.Z, {
                right: true,
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(DropdownItem/* default */.Z, {
                  onClick: blockConversation,
                  children: "Block conversation"
                }), /*#__PURE__*/(0,jsx_runtime.jsx)(DropdownItem/* default */.Z, {
                  onClick: deleteConversation,
                  children: "Delete conversation"
                })]
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ChatWrapper, {
        ref: chatArea,
        className: "user-chats",
        options: {
          wheelPropagation: false
        },
        children: [!!messages.length && messages[0].count > messages.length && /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "d-flex align-items-center justify-content-center",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.Z, {
            onClick: loadMore,
            color: "primary",
            className: "border-0 mb-1 profile-load-more",
            size: "sm",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                id: "loadMore"
              })
            })
          })
        }), selectedUser._id ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "chats",
          children: renderChats()
        }) : null]
      }), image ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: {
          position: "absolute",
          width: "100%",
          height: "100%",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#1f2144a3"
        },
        className: "d-flex flex-column align-items-center align-content-center justify-content-center border-primary rounded p-1 mt-1",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("img", {
          src: image,
          alt: "",
          width: 300,
          style: {
            maxHeight: "75%"
          }
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "ml-1 mt-1 d-flex align-items-center justify-content-center",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(x_circle/* default */.Z, {
            size: 50,
            className: " text-danger cursor-pointer",
            onClick: function onClick() {
              return setImage("");
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(arrow_right_circle/* default */.Z, {
            size: 50,
            className: " text-info cursor-pointer mx-2",
            onClick: function onClick(e) {
              return handleSendMsg(e);
            }
          })]
        })]
      }) : ability.can(actions/* ACTIONS.WRITE_ACTION */.a.WRITE_ACTION, subjects/* SUBJECTS.MESSAGE_SUBJECT */.k.MESSAGE_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)(Form/* default */.Z, {
        className: "chat-app-form",
        onSubmit: function onSubmit(e) {
          return handleSendMsg(e);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(InputGroup/* default */.Z, {
          className: "input-group-merge mr-1 form-send-message",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.Z, {
            type: "textarea",
            style: {
              lineHeight: "1rem",
              resize: "none"
            },
            disabled: selectedUser.stopped,
            value: message,
            onChange: function onChange(e) {
              return setMessage(e.target.value);
            },
            placeholder: selectedUser.stopped ? "This conversation is blocked" : "Type your message"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(InputGroupAddon/* default */.Z, {
            addonType: "append",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputGroupText/* default */.Z, {
              children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Label/* default */.Z, {
                className: "attachment-icon mb-0",
                for: "attach-doc",
                children: [/*#__PURE__*/(0,jsx_runtime.jsx)(icons_image/* default */.Z, {
                  className: "cursor-pointer text-primary",
                  size: 20
                }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
                  disabled: selectedUser.stopped,
                  type: "file",
                  id: "attach-doc",
                  onClick: function onClick(event) {
                    event.target.value = null;
                  },
                  hidden: true,
                  onChange: onChange,
                  accept: "image/*"
                })]
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Button/* default */.Z, {
          disabled: selectedUser.stopped,
          className: "send",
          color: "primary",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(send/* default */.Z, {
            size: 14,
            className: "d-lg-none"
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            className: "d-none d-lg-block",
            children: "Send"
          })]
        })]
      })]
    }) : null]
  });
};

/* harmony default export */ var Chat = (ChatLog);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(45987);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/grid.js
var grid = __webpack_require__(25471);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/x.js
var x = __webpack_require__(78268);
// EXTERNAL MODULE: ./node_modules/react-feather/dist/icons/search.js
var search = __webpack_require__(83206);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/CardText.js
var CardText = __webpack_require__(26094);
// EXTERNAL MODULE: ./node_modules/reactstrap/es/Badge.js
var Badge = __webpack_require__(17354);
// EXTERNAL MODULE: ./node_modules/react-select/dist/index-a7690a33.esm.js + 1 modules
var index_a7690a33_esm = __webpack_require__(39146);
// EXTERNAL MODULE: ./node_modules/react-select/dist/react-select.esm.js + 2 modules
var react_select_esm = __webpack_require__(39544);
;// CONCATENATED MODULE: ./src/views/apps/chat/SidebarLeft.js



var _excluded = ["data"];

function SidebarLeft_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function SidebarLeft_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? SidebarLeft_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : SidebarLeft_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports
 // ** Store & Actions

 // ** Utils
// ** Third Party Components



















var SidebarLeft = function SidebarLeft(props) {
  var _Object$keys;

  // ** Props & Store
  var sidebar = props.sidebar,
      handleSidebar = props.handleSidebar,
      handleUser = props.handleUser,
      handleNewUser = props.handleNewUser,
      messages = props.messages,
      selectedUser = props.selectedUser;
  var store = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  });
  var dispatch = (0,es/* useDispatch */.I0)();
  var userProfile = store.userData;

  var _useState = (0,react.useState)(0),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      timer = _useState2[0],
      setTimer = _useState2[1];

  var _useState3 = (0,react.useState)(null),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      user = _useState4[0],
      setUser = _useState4[1];

  var _useState5 = (0,react.useState)([]),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      users = _useState6[0],
      setUsers = _useState6[1];

  var intl = (0,useIntl/* default */.Z)();
  var ability = (0,react.useContext)(Can/* AbilityContext */.v);

  var handleUserClick = function handleUserClick(item) {
    handleUser(item.user);
  };

  var SelectComponent = function SelectComponent(_ref) {
    var data = _ref.data,
        props = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);

    return /*#__PURE__*/(0,jsx_runtime.jsx)(index_a7690a33_esm.c.Option, SidebarLeft_objectSpread(SidebarLeft_objectSpread({}, props), {}, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "d-flex flex-wrap align-items-center zindex-dropdown",
        children: [data.group ? /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
          className: "my-0 mr-50",
          size: "sm",
          icon: /*#__PURE__*/(0,jsx_runtime.jsx)(grid/* default */.Z, {})
        }) : /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
          className: "my-0 mr-50",
          size: "sm",
          img: data.avatar || avatar_blank
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "d-flex  flex-column justify-content-start",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("strong", {
            children: data.name
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("small", {
            className: "text-truncate mb-0",
            children: !data.group ? data.username : "".concat(data.members, " ").concat((0,useIntl/* default */.Z)().formatMessage({
              id: "members"
            }))
          })]
        })]
      })
    }));
  };

  var formatGroupLabel = function formatGroupLabel(data) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)("strong", {
      className: "d-flex align-items-center text-warning",
      children: [data.label === "students" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-user-graduate fa-lg mx-50"
      }) : data.label === "teachers" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-person-chalkboard fa-lg mx-50"
      }) : data.label === "operators" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-chalkboard-user fa-lg mx-50"
      }) : data.label === "owners" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-school fa-lg mx-50"
      }) : data.label === "driver" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-bus-simple fa-lg mx-50"
      }) : data.label === "accountants" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-money-bill-transfer mx-50"
      }) : data.label === "managers" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-user-tie mx-50"
      }) : data.label === "staff" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-id-badge fa-lg mx-50"
      }) : data.label === "parents" ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-house-chimney-user fa-lg mx-50"
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
        className: "fa-solid fa-people-group fa-lg mx-50"
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: intl.formatMessage({
          id: data.label
        })
      })]
    });
  };

  var handleUsersOption = function handleUsersOption(data) {
    var list = [];

    if (data) {
      Object.keys(data).forEach(function (d) {
        // don't chat with students
        if (d === "students" || d === "parents") {} else if (d !== "groups") {
          list.push({
            label: d,
            options: data[d].map(function (u) {
              return {
                value: u.id,
                label: u.name,
                avatar: u.avatar,
                email: u.email,
                name: u.name,
                username: u.username
              };
            })
          });
        } else {
          list.push({
            label: "groups",
            options: data.groups.map(function (u) {
              return {
                value: u.id,
                label: intl.formatMessage({
                  id: u.name
                }),
                members: u.members,
                name: intl.formatMessage({
                  id: u.name
                }),
                group: true,
                description: u.description
              };
            })
          });
        }
      });
    }

    setUsers([].concat(list));
  };

  var getUsers = function getUsers(val) {
    if (val) {
      clearTimeout(timer);
      setTimer(setTimeout(function () {
        return (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* MEMBERS_URL */.BE, 0, 20, [["name", "asc"]], {
          name: val
        }], true, react_toastify_esm/* toast */.Am, dispatch, "", "somethingWrong", function (data) {
          return handleUsersOption(data);
        }, null);
      }, 700));
    }
  };

  var renderChats = function renderChats() {
    if (messages && messages.length) {
      return messages.map(function (item) {
        return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", {
          className: classnames_default()({
            active: item.user._id === selectedUser._id
          }),
          onClick: function onClick() {
            return handleUserClick(item);
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
            img: item.user.profilePicture || avatar_blank,
            imgHeight: "42",
            imgWidth: "42" // status={item.status}

          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "chat-info flex-grow-1",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h5", {
              className: "mb-0 text-capitalize",
              children: item.user.name
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(CardText/* default */.Z, {
              className: "text-truncate",
              children: item.image ? "Image" : item.text || ""
            })]
          }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "chat-meta text-nowrap",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("small", {
              className: "float-right mb-25 chat-time ml-25",
              children: (0,Utils/* formatDateToMonthShort */.oS)(item.createdAt, intl.locale)
            }), item.unread >= 1 ? /*#__PURE__*/(0,jsx_runtime.jsx)(Badge/* default */.Z, {
              className: "float-right",
              color: "danger",
              pill: true,
              children: item.unread
            }) : null]
          })]
        }, item._id);
      });
    } else {
      return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        className: "no-results show",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)("h6", {
          className: "mb-0",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
            id: "noChatsFound"
          })
        })
      });
    }
  };

  var onUserChange = function onUserChange(e) {
    setUser(e);

    if (e) {
      handleNewUser(SidebarLeft_objectSpread(SidebarLeft_objectSpread({}, e), {}, {
        _id: e.value
      }));
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
    className: "sidebar-left",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "sidebar",
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classnames_default()("sidebar-content", {
          show: sidebar === true
        }),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "sidebar-close-icon",
          onClick: handleSidebar,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(x/* default */.Z, {
            size: 14
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "chat-fixed-search",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "d-flex align-items-center w-100",
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
              className: "sidebar-profile-toggle",
              children: (_Object$keys = Object.keys(userProfile)) !== null && _Object$keys !== void 0 && _Object$keys.length ? /*#__PURE__*/(0,jsx_runtime.jsx)(avatar/* default */.Z, {
                className: "avatar-border",
                img: (userProfile === null || userProfile === void 0 ? void 0 : userProfile.avatar) || avatar_blank // status={status}
                ,
                imgHeight: "42",
                imgWidth: "42"
              }) : null
            }), ability.can(actions/* ACTIONS.WRITE_ACTION */.a.WRITE_ACTION, subjects/* SUBJECTS.MESSAGE_SUBJECT */.k.MESSAGE_SUBJECT) && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
              style: {
                border: "#d8d6de solid 1px",
                borderRadius: "25px",
                display: "flex",
                alignItems: "center",
                marginLeft: "1rem",
                width: "100%"
              },
              children: [/*#__PURE__*/(0,jsx_runtime.jsx)(search/* default */.Z, {
                className: "mx-1",
                size: 18
              }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
                className: "flex-grow-1 mr-1",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(react_select_esm/* default */.ZP, {
                  styles: {
                    menu: function menu(provided) {
                      return SidebarLeft_objectSpread(SidebarLeft_objectSpread({}, provided), {}, {
                        zIndex: 9999
                      });
                    }
                  },
                  formatGroupLabel: formatGroupLabel,
                  placeholder: (0,useIntl/* default */.Z)().formatMessage({
                    id: "search"
                  }),
                  value: user,
                  noOptionsMessage: function noOptionsMessage() {
                    return /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
                      id: "noRecords"
                    });
                  },
                  onChange: onUserChange,
                  id: "email-to",
                  isClearable: true,
                  theme: Utils/* selectThemeColors */.ss,
                  options: users,
                  className: "react-select select-borderless",
                  classNamePrefix: "select",
                  components: {
                    Option: SelectComponent
                  },
                  onInputChange: function onInputChange(v) {
                    return getUsers(v);
                  },
                  filterOption: function filterOption(c, i) {
                    var _c$data, _c$data$label, _c$data$label$toLower, _c$data2, _c$data3, _c$data3$email, _c$data3$email$toLowe, _c$data4, _c$data4$username, _c$data4$username$toL, _c$data5, _c$data5$description, _c$data5$description$;

                    return (c === null || c === void 0 ? void 0 : (_c$data = c.data) === null || _c$data === void 0 ? void 0 : (_c$data$label = _c$data.label) === null || _c$data$label === void 0 ? void 0 : (_c$data$label$toLower = _c$data$label.toLowerCase()) === null || _c$data$label$toLower === void 0 ? void 0 : _c$data$label$toLower.includes(i === null || i === void 0 ? void 0 : i.toLowerCase())) || !(c !== null && c !== void 0 && (_c$data2 = c.data) !== null && _c$data2 !== void 0 && _c$data2.email) && (c === null || c === void 0 ? void 0 : (_c$data3 = c.data) === null || _c$data3 === void 0 ? void 0 : (_c$data3$email = _c$data3.email) === null || _c$data3$email === void 0 ? void 0 : (_c$data3$email$toLowe = _c$data3$email.toLowerCase()) === null || _c$data3$email$toLowe === void 0 ? void 0 : _c$data3$email$toLowe.includes(i === null || i === void 0 ? void 0 : i.toLowerCase())) || (c === null || c === void 0 ? void 0 : (_c$data4 = c.data) === null || _c$data4 === void 0 ? void 0 : (_c$data4$username = _c$data4.username) === null || _c$data4$username === void 0 ? void 0 : (_c$data4$username$toL = _c$data4$username.toLowerCase()) === null || _c$data4$username$toL === void 0 ? void 0 : _c$data4$username$toL.includes(i === null || i === void 0 ? void 0 : i.toLowerCase())) || (c === null || c === void 0 ? void 0 : (_c$data5 = c.data) === null || _c$data5 === void 0 ? void 0 : (_c$data5$description = _c$data5.description) === null || _c$data5$description === void 0 ? void 0 : (_c$data5$description$ = _c$data5$description.toLowerCase()) === null || _c$data5$description$ === void 0 ? void 0 : _c$data5$description$.includes(i === null || i === void 0 ? void 0 : i.toLowerCase()));
                  }
                })
              })]
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)((lib_default()), {
          className: "chat-user-list-wrapper list-group",
          options: {
            wheelPropagation: false
          },
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("h4", {
            className: "chat-list-title text-dark",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(components_message/* default */.Z, {
              id: "chats"
            })
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
            className: "chat-users-list chat-list media-list",
            children: renderChats()
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var chat_SidebarLeft = (SidebarLeft);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(93379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(90569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(19216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(44589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/@core/scss/base/pages/app-chat.scss
var app_chat = __webpack_require__(38625);
;// CONCATENATED MODULE: ./src/@core/scss/base/pages/app-chat.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(app_chat/* default */.Z, options);




       /* harmony default export */ var pages_app_chat = (app_chat/* default */.Z && app_chat/* default.locals */.Z.locals ? app_chat/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/@core/scss/base/pages/app-chat-list.scss
var app_chat_list = __webpack_require__(55927);
;// CONCATENATED MODULE: ./src/@core/scss/base/pages/app-chat-list.scss

      
      
      
      
      
      
      
      
      

var app_chat_list_options = {};

app_chat_list_options.styleTagTransform = (styleTagTransform_default());
app_chat_list_options.setAttributes = (setAttributesWithoutAttributes_default());

      app_chat_list_options.insert = insertBySelector_default().bind(null, "head");
    
app_chat_list_options.domAPI = (styleDomAPI_default());
app_chat_list_options.insertStyleElement = (insertStyleElement_default());

var app_chat_list_update = injectStylesIntoStyleTag_default()(app_chat_list/* default */.Z, app_chat_list_options);




       /* harmony default export */ var pages_app_chat_list = (app_chat_list/* default */.Z && app_chat_list/* default.locals */.Z.locals ? app_chat_list/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./src/configs/tableConstants.js
var tableConstants = __webpack_require__(82433);
// EXTERNAL MODULE: ./src/redux/actions/auth/index.js
var auth = __webpack_require__(77765);
// EXTERNAL MODULE: ./src/utility/context/Socket.js
var Socket = __webpack_require__(6607);
;// CONCATENATED MODULE: ./src/views/apps/chat/index.js




function chat_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function chat_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? chat_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : chat_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// ** React Imports
 // ** Chat App Component Imports


 // ** Third Party Components

 // ** Store & Actions














var AppChat = function AppChat() {
  // ** States
  var _useState = (0,react.useState)({}),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      selectedUser = _useState2[0],
      setSelectedUser = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      sidebar = _useState4[0],
      setSidebar = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      userSidebarRight = _useState6[0],
      setUserSidebarRight = _useState6[1];

  var _useState7 = (0,react.useState)(false),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      userSidebarLeft = _useState8[0],
      setUserSidebarLeft = _useState8[1];

  var _useState9 = (0,react.useState)(tableConstants/* tableRowsPerPage.0 */.m[0]),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 1),
      pageSize = _useState10[0];

  var _useState11 = (0,react.useState)(1),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      pageIndex = _useState12[0],
      setPageIndex = _useState12[1];

  var dispatch = (0,es/* useDispatch */.I0)();

  var _useState13 = (0,react.useState)([]),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      users = _useState14[0],
      setUsers = _useState14[1];

  var _useState15 = (0,react.useState)([]),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      messages = _useState16[0],
      setMessages = _useState16[1];

  var _useState17 = (0,react.useState)(''),
      _useState18 = (0,slicedToArray/* default */.Z)(_useState17, 2),
      filter = _useState18[0],
      setFilter = _useState18[1];

  var store = (0,es/* useSelector */.v9)(function (state) {
    return state.auth;
  });
  var socket = (0,react.useContext)(Socket/* SocketContext */.J);
  (0,react.useEffect)(function () {
    getMessages(filter);
  }, []);
  (0,react.useEffect)(function () {
    socket.on('chat-message-received', function () {
      getMessages(filter);
    });
    socket.on('read-message-sender', function (_ref) {
      var from = _ref.from;

      if (selectedUser._id === from) {
        messages.forEach(function (m) {
          return m.read = true;
        });
        setMessages(function (m) {
          return (0,toConsumableArray/* default */.Z)(m);
        });
      }
    });
    return function () {
      socket.off('chat-message-received');
      socket.off('read-message-sender'); // socket.close()
    };
  }, [selectedUser, messages]);

  var getUser = function getUser(id) {
    (0,utlis/* apiCall */.k_)(utlis/* get */.U2, [api_urls/* USER_URL */.uh, id], true, react_toastify_esm/* toast */.Am, dispatch, null, 'somethingWrong', handleNewUser, null);
  };

  var handleNewUser = function handleNewUser(res) {
    var u = {
      _id: res.id,
      name: res.name,
      profilePicture: res.avatar
    };
    updateUser(u);
  };

  var updateMessages = function updateMessages(response) {
    var groups = constructMessages(response.messages.rows);
    setUsers(groups); // if (id) {
    //     const u = groups.find((f) => f._id === id)
    //     if (!u) {
    //         getUser(id)
    //     }
    // } else

    if (selectedUser._id) {
      getMessagesBySender(selectedUser._id);
    } // refreshNavbar(response.count)

  };

  var loadMoreMessagesBySender = function loadMoreMessagesBySender() {
    setPageIndex(pageIndex + 1);
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* GET_ALL_MESSAGES_BY_SENDER_URL */.ze, pageIndex + 1, pageSize, null, {
      id: selectedUser._id
    }], true, react_toastify_esm/* toast */.Am, dispatch, null, 'somethingWrong', function (res) {
      return setMessages([].concat((0,toConsumableArray/* default */.Z)(res.messages || []), (0,toConsumableArray/* default */.Z)(messages)));
    }, null);
  };

  var constructMessages = function constructMessages(m) {
    return m.map(function (msg) {
      var _store$userData, _store$userData2, _store$userData3, _store$userData4;

      var senderId = ((_store$userData = store.userData) === null || _store$userData === void 0 ? void 0 : _store$userData.id) === msg.from ? msg.to : msg.from;
      var text = {
        _id: Math.round(Math.random() * 1000000),
        text: msg.message,
        createdAt: msg.createdAt,
        image: msg.image,
        unread: selectedUser && selectedUser._id === senderId ? 0 : msg.unread,
        stopped: msg.stopped,
        user: {
          _id: senderId,
          name: ((_store$userData2 = store.userData) === null || _store$userData2 === void 0 ? void 0 : _store$userData2.id) === msg.from ? msg.toName : msg.fromName,
          profilePicture: ((_store$userData3 = store.userData) === null || _store$userData3 === void 0 ? void 0 : _store$userData3.id) === msg.from ? msg.toPicture : msg.fromPicture
        }
      };

      if (msg.sender === ((_store$userData4 = store.userData) === null || _store$userData4 === void 0 ? void 0 : _store$userData4.id)) {
        text.pending = !msg.read;
        text.received = msg.read;
      }

      return text;
    });
  };

  var getMessages = function getMessages(f) {
    console.log('CALLED');
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* MESSAGES_URL */.u7, pageIndex, Number.MAX_SAFE_INTEGER, null, {
      search: f
    }], true, react_toastify_esm/* toast */.Am, dispatch, null, 'somethingWrong', updateMessages, null);
  };

  var getMessagesBySender = function getMessagesBySender(id) {
    setPageIndex(1);
    (0,utlis/* apiCall */.k_)(utlis/* getAllPaged */.Ki, [api_urls/* GET_ALL_MESSAGES_BY_SENDER_URL */.ze, 1, pageSize, null, {
      id: id
    }], false, react_toastify_esm/* toast */.Am, dispatch, null, 'somethingWrong', function (res) {
      socket.emit('read-message', {
        from: store.userData.id,
        to: id
      });
      setMessages(res.messages);
    }, null);
  }; // ** Sidebar & overlay toggle functions


  var handleSidebar = function handleSidebar() {
    return setSidebar(!sidebar);
  };

  var handleUserSidebarRight = function handleUserSidebarRight() {
    return setUserSidebarRight(!userSidebarRight);
  };

  var handleOverlayClick = function handleOverlayClick() {
    setSidebar(false);
    setUserSidebarRight(false);
    setUserSidebarLeft(false);
  };

  var updateUser = function updateUser(user) {
    setSelectedUser(user);

    if (user._id) {
      getMessagesBySender(user._id);
    }
  }; // ** Set user function for Right Sidebar


  var handleUser = function handleUser(user, message) {
    var u = users.find(function (u) {
      return u.user._id === user._id;
    });

    if (u) {
      u.unread = 0;
      setSelectedUser(chat_objectSpread(chat_objectSpread({}, u), u.user));
    } else if (user._id) {
      users.push({
        user: user,
        text: message === null || message === void 0 ? void 0 : message.message,
        image: message === null || message === void 0 ? void 0 : message.image,
        createdAt: new Date()
      });
      setSelectedUser(user);
    } else {
      setSelectedUser({});
    }

    setUsers((0,toConsumableArray/* default */.Z)(users));

    if (user._id) {
      getMessagesBySender(user._id);
    }

    setSidebar(false);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(chat_SidebarLeft, {
      handleUser: handleUser,
      handleNewUser: function handleNewUser(u) {
        return getUser(u._id);
      },
      sidebar: sidebar,
      handleSidebar: handleSidebar,
      messages: users || [],
      selectedUser: selectedUser
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "content-right",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: "content-wrapper",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "content-body",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: classnames_default()('body-content-overlay', {
              show: userSidebarRight === true || sidebar === true || userSidebarLeft === true
            }),
            onClick: handleOverlayClick
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Chat, {
            loadMore: loadMoreMessagesBySender,
            setSelectedUser: setSelectedUser,
            setUsers: setUsers,
            selectedUser: selectedUser,
            handleUser: handleUser,
            handleSidebar: handleSidebar,
            userSidebarLeft: userSidebarLeft,
            handleUserSidebarRight: handleUserSidebarRight,
            users: users,
            messages: messages || []
          })]
        })
      })
    })]
  });
};

/* harmony default export */ var chat = (AppChat);

/***/ }),

/***/ 16714:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": function() { return /* binding */ SweetAlert; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15861);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64687);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77630);
/* harmony import */ var sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86455);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);




var MySwal = sweetalert2_react_content__WEBPACK_IMPORTED_MODULE_1___default()((sweetalert2__WEBPACK_IMPORTED_MODULE_2___default()));
var SweetAlert = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(title, text, icon, showCancelButton, confirmButtonText, cancelButtonText) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", MySwal.fire({
              title: title,
              text: text,
              icon: icon,
              showCancelButton: showCancelButton,
              confirmButtonText: confirmButtonText,
              cancelButtonText: cancelButtonText,
              customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger ml-1'
              },
              buttonsStyling: false
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function SweetAlert(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ 32627:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30381);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86896);



var TimeAgo = function TimeAgo(props) {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();

  function timeAgo(dateParam) {
    if (!dateParam) {
      return null;
    }

    var days = moment__WEBPACK_IMPORTED_MODULE_0___default()().set({
      hour: 0
    }).dayOfYear() - moment__WEBPACK_IMPORTED_MODULE_0___default()(dateParam).set({
      hour: 0
    }).dayOfYear();

    if (days <= 0) {
      return intl.formatMessage({
        id: "today"
      });
    }

    if (days === 1) {
      return intl.formatMessage({
        id: "yesterday"
      });
    }

    if (days < 7) {
      return days + " " + (days > 1 ? intl.formatMessage({
        id: "daysAgo"
      }) : intl.formatMessage({
        id: "dayAgo"
      }));
    }

    if (days >= 7 && days <= 30) {
      var weeks = Math.floor(days / 7);
      return weeks + " " + (weeks > 1 ? intl.formatMessage({
        id: "weeksAgo"
      }) : intl.formatMessage({
        id: "weekAgo"
      }));
    }

    if (days > 30 && days <= 356) {
      var months = Math.floor(days / 30);
      return months + " " + (months > 1 ? intl.formatMessage({
        id: "monthsAgo"
      }) : intl.formatMessage({
        id: "monthAgo"
      }));
    }

    if (days > 365) {
      var years = Math.floor(days / 365);
      return years + " " + (years > 1 ? intl.formatMessage({
        id: "yearsAgo"
      }) : intl.formatMessage({
        id: "yearAgo"
      }));
    }
  }

  return timeAgo(props.date);
};

/* harmony default export */ __webpack_exports__["Z"] = (TimeAgo);

/***/ }),

/***/ 55927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".chat-app-window .user-chats{background-color:#f2f0f7;padding:1rem;position:relative;height:calc(\n      100% - 65px - 65px\n    )}\n\n.chat-app-window .user-chats .avatar img{border:2px solid #fff}\n\n.chat-app-window .active-chat{height:inherit}\n\n.chat-app-window .active-chat .chat-header{display:flex;justify-content:space-between;height:65px;background-color:#fff;padding:0 1rem;border-bottom:1px solid #ebe9f1}\n\n[dir=\"ltr\"] .chat-app-window .chats .chat-avatar{float:right}\n\n[dir=\"rtl\"] .chat-app-window .chats .chat-avatar{float:left}\n\n.chat-app-window .chats .chat-body{display:block;overflow:hidden}\n\n[dir=\"ltr\"] .chat-app-window .chats .chat-body{margin:10px 30px 0 0}\n\n[dir=\"rtl\"] .chat-app-window .chats .chat-body{margin:10px 0 0 30px}\n\n.chat-app-window .chats .chat-body .chat-content{padding:.7rem 1rem;clear:both;color:#fff;background-repeat:repeat-x;border-radius:.357rem;box-shadow:0 4px 8px 0 rgba(34,41,47,.12);max-width:75%}\n\n[dir=\"ltr\"] .chat-app-window .chats .chat-body .chat-content{float:right;margin:0 1rem 10px 0;background-image:linear-gradient(80deg, #1F2144, #2f3267)}\n\n[dir=\"rtl\"] .chat-app-window .chats .chat-body .chat-content{float:left;margin:0 0 10px 1rem;background-image:linear-gradient(-80deg, #1F2144, #2f3267)}\n\n.chat-app-window .chats .chat-body .chat-content p{margin:0}\n\n[dir=\"ltr\"] .chat-app-window .chats .chat-left .chat-avatar{float:left}\n\n[dir=\"rtl\"] .chat-app-window .chats .chat-left .chat-avatar{float:right}\n\n.chat-app-window .chats .chat-left .chat-body .chat-content{color:#545b64;background:none;background-color:#fff}\n\n[dir=\"ltr\"] .chat-app-window .chats .chat-left .chat-body .chat-content{float:left;margin:0 0 10px 1rem}\n\n[dir=\"rtl\"] .chat-app-window .chats .chat-left .chat-body .chat-content{float:right;margin:0 1rem 10px 0}\n\n.chat-app-window .chat-app-form{height:65px;padding:0 1rem;background-color:#fff;display:flex;align-items:center;border-top:1px solid #ebe9f1}\n\n.chat-widget .card-header{padding-top:.8rem;padding-bottom:.8rem}\n\n.chat-widget .chat-app-window .user-chats{background-color:#f8f8f8;height:390px}\n\n.chat-widget .chat-app-window .chat-app-form{border-top:0;border-bottom-left-radius:.357rem;border-bottom-right-radius:.357rem;height:56px}\n\n.chat-widget .chat-app-window .chat-app-form .input-group-text,.chat-widget .chat-app-window .chat-app-form .message{border:0}\n\n[dir=\"ltr\"] .chat-widget .chat-app-window .chat-app-form .input-group-text,[dir=\"ltr\"] .chat-widget .chat-app-window .chat-app-form .message{padding-left:0}\n\n[dir=\"rtl\"] .chat-widget .chat-app-window .chat-app-form .input-group-text,[dir=\"rtl\"] .chat-widget .chat-app-window .chat-app-form .message{padding-right:0}\n\n.chat-widget .chat-app-window .chat-app-form .input-group:not(.bootstrap-touchspin):focus-within{box-shadow:none}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 38625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(55811), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".chat-application .content-area-wrapper{border:1px solid #ebe9f1;border-radius:.428rem}\n\n.chat-application .chat-profile-sidebar{height:inherit;width:360px;border-radius:.25rem;position:absolute;background-color:#fff;transition:all .3s ease,background 0s,border 0s,color 0s;z-index:6}\n\n[dir=\"ltr\"] .chat-application .chat-profile-sidebar{border-right:1px solid #ebe9f1;border-top-right-radius:0;border-bottom-right-radius:0;transform:translateX(-110%)}\n\n[dir=\"rtl\"] .chat-application .chat-profile-sidebar{border-left:1px solid #ebe9f1;border-top-left-radius:0;border-bottom-left-radius:0;transform:translateX(110%)}\n\n.chat-application .chat-profile-sidebar.show{transform:translateX(0);transition:all .3s ease,background 0s,border 0s,color 0s}\n\n.chat-application .chat-profile-sidebar .chat-profile-header{display:flex;align-items:center;justify-content:center;height:200px;text-align:center}\n\n.chat-application .chat-profile-sidebar .chat-profile-header .avatar{margin-bottom:1.25rem}\n\n.chat-application .chat-profile-sidebar .profile-sidebar-area{height:calc(100% - 200px);position:relative;padding:0 2rem 1.5rem}\n\n.chat-application .close-icon{position:absolute;top:.85rem;cursor:pointer}\n\n[dir=\"ltr\"] .chat-application .close-icon{right:1rem}\n\n[dir=\"rtl\"] .chat-application .close-icon{left:1rem}\n\n.chat-application .sidebar-close-icon svg,.chat-application .sidebar-close-icon i,.chat-application .close-icon svg,.chat-application .close-icon i{font-size:1.143rem;height:1.143rem;width:1.143rem}\n\n.chat-application .avatar-border img{border:2px solid #fff}\n\n.chat-application .sidebar-content{background-color:#fff;height:inherit;width:360px;border-radius:.25rem;margin:0;box-shadow:none}\n\n[dir=\"ltr\"] .chat-application .sidebar-content{border-right:1px solid #ebe9f1;border-top-right-radius:0;border-bottom-right-radius:0}\n\n[dir=\"rtl\"] .chat-application .sidebar-content{border-left:1px solid #ebe9f1;border-top-left-radius:0;border-bottom-left-radius:0}\n\n.chat-application .sidebar-content .sidebar-close-icon{position:absolute;top:.25rem;font-size:1.25rem;z-index:1;cursor:pointer;visibility:hidden}\n\n[dir=\"ltr\"] .chat-application .sidebar-content .sidebar-close-icon{right:.25rem}\n\n[dir=\"rtl\"] .chat-application .sidebar-content .sidebar-close-icon{left:.25rem}\n\n.chat-application .sidebar-content .chat-fixed-search{width:360px;border-bottom:1px solid #ebe9f1;padding:0 1.286rem;height:65px;display:flex}\n\n.chat-application .sidebar-content .chat-fixed-search .sidebar-profile-toggle .avatar{display:inline-table}\n\n.chat-application .sidebar-content .chat-fixed-search .input-group:focus-within{background-color:rgba(0,0,0,0);box-shadow:none}\n\n.chat-application .sidebar-content .chat-list-title{color:#1f2144;margin:2rem 1.286rem .5rem}\n\n.chat-application .sidebar-content .chat-user-list-wrapper{position:relative;height:calc(100% - 65px);width:360px;border-radius:0}\n\n.chat-application .sidebar-content .chat-user-list-wrapper .avatar{height:42px}\n\n.chat-application .sidebar-content .chat-user-list-wrapper .avatar [class*=avatar-status-]{bottom:1px}\n\n[dir=\"ltr\"] .chat-application .sidebar-content .chat-user-list-wrapper .avatar [class*=avatar-status-]{right:1px}\n\n[dir=\"rtl\"] .chat-application .sidebar-content .chat-user-list-wrapper .avatar [class*=avatar-status-]{left:1px}\n\n.chat-application .sidebar-content .chat-user-list-wrapper .contact-list .chat-info{width:calc(100% - 46px)}\n\n[dir=\"ltr\"] .chat-application .sidebar-content .chat-user-list-wrapper .contact-list .chat-info{padding-right:0}\n\n[dir=\"rtl\"] .chat-application .sidebar-content .chat-user-list-wrapper .contact-list .chat-info{padding-left:0}\n\n.chat-application .sidebar-content .chat-user-list-wrapper .no-results{padding:.786rem 1.286rem;display:none !important}\n\n.chat-application .sidebar-content .chat-user-list-wrapper .no-results.show{display:block !important}\n\n.chat-application .sidebar-content .chat-user-list-wrapper ul{margin-bottom:0}\n\n[dir=\"ltr\"] .chat-application .sidebar-content .chat-user-list-wrapper ul{padding-left:0}\n\n[dir=\"rtl\"] .chat-application .sidebar-content .chat-user-list-wrapper ul{padding-right:0}\n\n.chat-application .sidebar-content .chat-user-list-wrapper li{display:flex;padding:.786rem 1.286rem}\n\n.chat-application .sidebar-content .chat-user-list-wrapper li .chat-info{margin-top:.3rem;width:calc(100% - 46px - 46px);padding:0 .75rem}\n\n.chat-application .sidebar-content .chat-user-list-wrapper li .chat-info .card-text,.chat-application .sidebar-content .chat-user-list-wrapper li .chat-info p{color:#b9b9c3}\n\n.chat-application .sidebar-content .chat-user-list-wrapper li .chat-time{color:#b9b9c3}\n\n.chat-application .sidebar-content .chat-user-list-wrapper li:hover{cursor:pointer;background:#f8f8f8}\n\n.chat-application .sidebar-content .chat-user-list-wrapper li.active{background-repeat:repeat-x}\n\n[dir=\"ltr\"] .chat-application .sidebar-content .chat-user-list-wrapper li.active{background-image:linear-gradient(80deg, #1F2144, #2f3267)}\n\n[dir=\"rtl\"] .chat-application .sidebar-content .chat-user-list-wrapper li.active{background-image:linear-gradient(-80deg, #1F2144, #2f3267)}\n\n.chat-application .sidebar-content .chat-user-list-wrapper li.active h1,.chat-application .sidebar-content .chat-user-list-wrapper li.active h2,.chat-application .sidebar-content .chat-user-list-wrapper li.active h3,.chat-application .sidebar-content .chat-user-list-wrapper li.active h4,.chat-application .sidebar-content .chat-user-list-wrapper li.active h5,.chat-application .sidebar-content .chat-user-list-wrapper li.active h6,.chat-application .sidebar-content .chat-user-list-wrapper li.active .card-text,.chat-application .sidebar-content .chat-user-list-wrapper li.active .chat-time{color:#fff}\n\n.chat-application .sidebar-content .chat-user-list-wrapper li img{border:2px solid #fff}\n\n.chat-application .chat-app-window{height:100%}\n\n.chat-application .chat-app-window .start-chat-area,.chat-application .chat-app-window .user-chats{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-color:#f2f0f7;background-repeat:repeat;background-size:210px}\n\n.chat-application .chat-app-window .start-chat-area{height:inherit;display:flex;justify-content:center;align-items:center;flex-direction:column}\n\n.chat-application .chat-app-window .start-chat-area .start-chat-icon,.chat-application .chat-app-window .start-chat-area .start-chat-text{background:#fff;box-shadow:0 4px 8px 0 rgba(34,41,47,.12) !important;color:#545b64}\n\n.chat-application .chat-app-window .start-chat-area .start-chat-text{padding:.5rem 1rem;border-radius:calc(0.357rem * 4);cursor:pointer}\n\n.chat-application .chat-app-window .start-chat-area .start-chat-icon{border-radius:50%;padding:2rem}\n\n.chat-application .chat-app-window .start-chat-area .start-chat-icon svg,.chat-application .chat-app-window .start-chat-area .start-chat-icon i{height:4rem;width:4rem;font-size:4rem}\n\n.chat-application .user-profile-sidebar{width:360px;border-radius:.25rem;background-color:#fff;position:absolute;transition:all .3s ease,background 0s,border 0s,color 0s;z-index:6;bottom:0;top:0}\n\n[dir=\"ltr\"] .chat-application .user-profile-sidebar{border-top-left-radius:0;border-bottom-left-radius:0;transform:translateX(110%);right:0}\n\n[dir=\"rtl\"] .chat-application .user-profile-sidebar{border-top-right-radius:0;border-bottom-right-radius:0;transform:translateX(-110%);left:0}\n\n.chat-application .user-profile-sidebar.show{transform:translateX(0%);transition:all .3s ease,background 0s,border 0s,color 0s}\n\n.chat-application .user-profile-sidebar .user-profile-header .header-profile-sidebar{height:200px;display:flex;align-items:center;justify-content:center;text-align:center;flex-direction:column;width:100%}\n\n.chat-application .user-profile-sidebar .user-profile-header .avatar{margin-bottom:1.25rem}\n\n.chat-application .user-profile-sidebar .user-profile-sidebar-area{position:relative;height:calc(100% - 200px);padding:0 2rem 1.5rem}\n\n@media(max-width: 991.98px){\n.content-right{width:100%}\n\n.chat-application .sidebar-content{transition:all .3s ease-in-out;position:absolute;z-index:5}\n\n[dir=\"ltr\"] .chat-application .sidebar-content{transform:translateX(-110%)}\n\n[dir=\"rtl\"] .chat-application .sidebar-content{transform:translateX(110%)}\n\n.chat-application .sidebar-content.show{transform:translateX(0);transition:all .3s ease}}\n\n@media(max-width: 767.98px){\n.chat-application .sidebar-content .sidebar-close-icon{visibility:visible;top:15px;padding:.65rem;line-height:1}\n\n[dir=\"ltr\"] .chat-application .sidebar-content .sidebar-close-icon{right:0}\n\n[dir=\"rtl\"] .chat-application .sidebar-content .sidebar-close-icon{left:0}\n\n[dir=\"ltr\"] .chat-application .sidebar-content .chat-fixed-search{padding-right:2.5rem}\n\n[dir=\"rtl\"] .chat-application .sidebar-content .chat-fixed-search{padding-left:2.5rem}}\n\n@media(max-width: 575.98px){\n.chat-application .sidebar{position:unset !important}\n\n.chat-application .sidebar-content{width:100%}\n\n.chat-application .sidebar-content .chat-fixed-search,.chat-application .sidebar-content .chat-user-list-wrapper{width:100%}\n\n.chat-application .chat-profile-sidebar{width:100%}\n\n.chat-application .user-profile-sidebar{width:100%}}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 15538:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63366);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97326);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94578);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23663);








var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_3__/* .tagPropType */ .iC,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
var defaultProps = {
  tag: 'form'
};

var Form = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(Form, _Component);

  function Form(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_this));
    _this.submit = _this.submit.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_this));
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.submit = function submit() {
    if (this.ref) {
      this.ref.submit();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        inline = _this$props.inline,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_this$props, ["className", "cssModule", "inline", "tag", "innerRef"]);

    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, inline ? 'form-inline' : false), cssModule);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Form;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (Form);

/***/ }),

/***/ 609:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63366);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97326);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94578);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23663);





/* eslint react/prefer-stateless-function: 0 */




var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  bsSize: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  valid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  invalid: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  tag: _utils__WEBPACK_IMPORTED_MODULE_3__/* .tagPropType */ .iC,
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  plaintext: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  addon: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};
var defaultProps = {
  type: 'text'
};

var Input = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(Input, _React$Component);

  function Input(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_this));
    _this.focus = _this.focus.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_this));
    return _this;
  }

  var _proto = Input.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.focus = function focus() {
    if (this.ref) {
      this.ref.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        bsSize = _this$props.bsSize,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        tag = _this$props.tag,
        addon = _this$props.addon,
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_this$props, ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"]);

    var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    var isNotaNumber = new RegExp('\\D', 'g');
    var fileInput = type === 'file';
    var textareaInput = type === 'textarea';
    var selectInput = type === 'select';
    var rangeInput = type === 'range';
    var Tag = tag || (selectInput || textareaInput ? type : 'input');
    var formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || 'input';
    } else if (fileInput) {
      formControlClass = formControlClass + "-file";
    } else if (rangeInput) {
      formControlClass = formControlClass + "-range";
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .warnOnce */ .O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);

    if (Tag === 'input' || tag && typeof tag === 'function') {
      attributes.type = type;
    }

    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
      (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .warnOnce */ .O4)("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({}, attributes, {
      ref: innerRef,
      className: classes,
      "aria-invalid": invalid
    }));
  };

  return Input;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (Input);

/***/ }),

/***/ 69618:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23663);






var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_2__/* .tagPropType */ .iC,
  size: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'div'
};

var InputGroup = function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, ["className", "cssModule", "tag", "size"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'input-group', size ? "input-group-" + size : null), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, attributes, {
    className: classes
  }));
};

InputGroup.propTypes = propTypes;
InputGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (InputGroup);

/***/ }),

/***/ 88822:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23663);
/* harmony import */ var _InputGroupText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51566);







var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_2__/* .tagPropType */ .iC,
  addonType: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(['prepend', 'append']).isRequired,
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'div'
};

var InputGroupAddon = function InputGroupAddon(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      addonType = props.addonType,
      children = props.children,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, ["className", "cssModule", "tag", "addonType", "children"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'input-group-' + addonType), cssModule); // Convenience to assist with transition

  if (typeof children === 'string') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, attributes, {
      className: classes
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InputGroupText__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      children: children
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, attributes, {
    className: classes,
    children: children
  }));
};

InputGroupAddon.propTypes = propTypes;
InputGroupAddon.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (InputGroupAddon);

/***/ }),

/***/ 51566:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23663);






var propTypes = {
  tag: _utils__WEBPACK_IMPORTED_MODULE_2__/* .tagPropType */ .iC,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
var defaultProps = {
  tag: 'span'
};

var InputGroupText = function InputGroupText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, ["className", "cssModule", "tag"]);

  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'input-group-text'), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, attributes, {
    className: classes
  }));
};

InputGroupText.propTypes = propTypes;
InputGroupText.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (InputGroupText);

/***/ }),

/***/ 67954:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87462);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94184);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23663);






var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]);
var columnProps = prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number), prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
  size: stringOrNumberProp,
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node),
  hidden: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  check: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  for: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  tag: _utils__WEBPACK_IMPORTED_MODULE_3__/* .tagPropType */ .iC,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  cssModule: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  widths: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};
var defaultProps = {
  tag: 'label',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var Label = function Label(props) {
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      widths = props.widths,
      Tag = props.tag,
      check = props.check,
      size = props.size,
      htmlFor = props.for,
      attributes = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(props, ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"]);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;
    var colClass;

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isObject */ .Kn)(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  var classes = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .mapToCssModules */ .mx)(classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? "col-form-label-" + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Tag, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
    htmlFor: htmlFor
  }, attributes, {
    className: classes
  }));
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["Z"] = (Label);

/***/ }),

/***/ 55811:
/***/ (function(module) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNjAgMjYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNjAgMjYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0UxRTBFOTt9Cjwvc3R5bGU+CjxnPgoJPGcgaWQ9ImktbGlrZS1mb29kIj4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjQuNCwxNmMwLjIsMC42LDAuNCwxLjMsMC41LDJoLTMuN2wxLjIsMi4zbDAuNSwwLjlsLTAuMiwwLjFWMjhjMi4yLDEuNywyLjcsNC44LDEsNwoJCQljLTAuOCwxLTEuOSwxLjctMy4yLDEuOVYzN2MtMC45LDMuNS00LjEsNi03LjgsNmgtMjBjLTMuNiwwLTYuOC0yLjUtNy43LTZ2LTAuMWMtMi43LTAuNC00LjYtMy00LjItNS43YzAuMi0xLjMsMC45LTIuNSwxLjktMy4yCgkJCXYtNi44bC0wLjgtMS42bC0wLjQtMC45bDAuOS0wLjRMLTE3LDE4aC0zQy0xNy4yLDUuNi00LjktMi4yLDcuNSwwLjZDMTUuNCwyLjMsMjEuOSw4LjIsMjQuNCwxNnogTS0xMi40LDE4Yy0wLjIsMC0wLjMsMC0wLjQsMC4xCgkJCWwtMy4xLDEuNmwwLjksMS44bDEuMy0wLjdjMC44LTAuNCwxLjgtMC40LDIuNywwbDIuMiwxLjFjMC4zLDAuMSwwLjYsMC4xLDAuOSwwbDIuMi0xLjFjMC44LTAuNCwxLjgtMC40LDIuNywwbDIuMiwxLjEKCQkJYzAuMywwLjEsMC42LDAuMSwwLjksMGwyLjItMS4xYzAuOC0wLjQsMS44LTAuNCwyLjcsMGwyLjIsMS4xQzcuNCwyMiw3LjcsMjIsOCwyMS45bDIuOS0xLjNjMC44LTAuMywxLjctMC4zLDIuNCwwbDIuOSwxLjMKCQkJYzAuMywwLjEsMC42LDAuMSwwLjksMGwzLjEtMS41bC0wLjktMS44bC0xLjQsMC43Yy0wLjgsMC40LTEuNywwLjQtMi42LDAuMWwtMi44LTEuMkMxMi4zLDE4LDEyLjIsMTgsMTIuMSwxOGwwLDAKCQkJYy0wLjEsMC0wLjMsMC0wLjQsMC4xbC0yLjgsMS4yYy0wLjgsMC40LTEuOCwwLjMtMi42LTAuMUw0LDE4LjFDMy45LDE4LDMuNywxOCwzLjYsMThsMCwwYy0wLjIsMC0wLjMsMC0wLjQsMC4xTDEsMTkuMgoJCQljLTAuOCwwLjQtMS44LDAuNC0yLjcsMEwtNCwxOC4xQy00LjEsMTgtNC4zLDE4LTQuNCwxOGwwLDBjLTAuMiwwLTAuMywwLTAuNCwwLjFMLTcsMTkuMmMtMC44LDAuNC0xLjgsMC40LTIuNywwbC0yLjItMS4xCgkJCUMtMTIuMSwxOC0xMi4zLDE4LTEyLjQsMThMLTEyLjQsMThMLTEyLjQsMTh6IE0tMTIuNCwxNmgtNC45Qy0xMy41LDUuMS0xLjUtMC43LDkuNSwzLjJjNiwyLjEsMTAuNyw2LjgsMTIuOCwxMi44aC0yLjFsLTAuMS0wLjEKCQkJTDE5LjksMTZILTEyLjRMLTEyLjQsMTZ6IE0xNy45LDIzLjdsMS40LTAuN2gxLjN2MmgtMzZ2LTEuMWwwLjMtMC4ybDEuNC0wLjdoMi42bDEuNCwwLjdjMC44LDAuNCwxLjgsMC40LDIuNywwbDEuNC0wLjdILTMKCQkJbDEuNCwwLjdjMC44LDAuNCwxLjgsMC40LDIuNywwTDIuMywyM2gyLjZsMS40LDAuN2MwLjcsMC40LDEuNywwLjQsMi41LDBsMS43LTAuN2gzLjJsMS43LDAuN0MxNi4yLDI0LjEsMTcuMSwyNC4xLDE3LjksMjMuN3oKCQkJIE0tMTMuOCwyN2wxNi40LDQuOUwxOC45LDI3SC0xMy44eiBNLTE0LjQsMjloMC4zbDE2LjcsNWwxNi43LTVoMC4zYzEuNywwLDMsMS4zLDMsM3MtMS4zLDMtMywzaC0zNGMtMS43LDAtMy0xLjMtMy0zCgkJCUMtMTcuNCwzMC4zLTE2LjEsMjktMTQuNCwyOXogTS0xMy4xLDM3YzAuOCwyLjQsMy4xLDQsNS43LDRoMjBjMi41LDAsNC44LTEuNiw1LjctNEMxOC4yLDM3LTEzLjEsMzctMTMuMSwzN3oiLz4KCQk8cGF0aCBpZD0icGF0aDZfZmlsbC1jb3B5IiBjbGFzcz0ic3QwIiBkPSJNMjg0LjQsMTZjMC4yLDAuNiwwLjQsMS4zLDAuNSwyaC0zLjdsMS4yLDIuM2wwLjUsMC45bC0wLjIsMC4xVjI4YzIuMiwxLjcsMi43LDQuOCwxLDcKCQkJYy0wLjgsMS0xLjksMS43LTMuMiwxLjlWMzdjLTAuOSwzLjUtNC4xLDYtNy44LDZoLTIwYy0zLjYsMC02LjgtMi41LTcuNy02di0wLjFjLTIuNy0wLjQtNC42LTMtNC4yLTUuN2MwLjItMS4zLDAuOS0yLjUsMS45LTMuMgoJCQl2LTYuOGwtMC44LTEuNmwtMC40LTAuOWwwLjktMC40TDI0MywxOGgtM2MyLjgtMTIuNCwxNS4xLTIwLjIsMjcuNS0xNy40QzI3NS40LDIuMywyODEuOSw4LjIsMjg0LjQsMTZ6IE0yNDcuNSwxOAoJCQljLTAuMiwwLTAuMywwLTAuNCwwLjFsLTMuMSwxLjZsMC45LDEuOGwxLjMtMC43YzAuOC0wLjQsMS44LTAuNCwyLjcsMGwyLjIsMS4xYzAuMywwLjEsMC42LDAuMSwwLjksMGwyLjItMS4xCgkJCWMwLjgtMC40LDEuOC0wLjQsMi43LDBsMi4yLDEuMWMwLjMsMC4xLDAuNiwwLjEsMC45LDBsMi4yLTEuMWMwLjgtMC40LDEuOC0wLjQsMi43LDBsMi4yLDEuMWMwLjMsMC4xLDAuNiwwLjEsMC45LDBsMi45LTEuMwoJCQljMC44LTAuMywxLjctMC4zLDIuNCwwbDIuOSwxLjNjMC4zLDAuMSwwLjYsMC4xLDAuOSwwbDMuMS0xLjVsLTAuOS0xLjhsLTEuNCwwLjdjLTAuOCwwLjQtMS43LDAuNC0yLjYsMC4xbC0yLjgtMS4yCgkJCWMtMC4xLTAuMS0wLjMtMC4xLTAuNC0wLjFsMCwwYy0wLjEsMC0wLjMsMC0wLjQsMC4xbC0yLjgsMS4yYy0wLjgsMC40LTEuOCwwLjMtMi42LTAuMWwtMi4zLTEuMWMtMC4xLTAuMS0wLjMtMC4xLTAuNS0wLjFsMCwwCgkJCWMtMC4yLDAtMC4zLDAtMC40LDAuMWwtMi4yLDEuMWMtMC44LDAuNC0xLjgsMC40LTIuNywwbC0yLjItMS4xYy0wLjEtMC4xLTAuMy0wLjEtMC40LTAuMWwwLDBjLTAuMiwwLTAuMywwLTAuNCwwLjFsLTIuMiwxLjEKCQkJYy0wLjgsMC40LTEuOCwwLjQtMi43LDBsLTIuMi0xLjFDMjQ3LjksMTgsMjQ3LjcsMTgsMjQ3LjUsMThMMjQ3LjUsMThMMjQ3LjUsMTh6IE0yNDcuNSwxNmgtNC45YzMuOS0xMC45LDE1LjktMTYuNywyNi44LTEyLjgKCQkJYzYsMi4xLDEwLjcsNi44LDEyLjgsMTIuOGgtMi4xbC0wLjEtMC4xbC0wLjMsMC4xSDI0Ny41TDI0Ny41LDE2eiBNMjc3LjksMjMuN2wxLjQtMC43aDEuM3YyaC0zNnYtMS4xbDAuMy0wLjJsMS40LTAuN2gyLjYKCQkJbDEuNCwwLjdjMC44LDAuNCwxLjgsMC40LDIuNywwbDEuNC0wLjdoMi42bDEuNCwwLjdjMC44LDAuNCwxLjgsMC40LDIuNywwbDEuNC0wLjdoMi42bDEuNCwwLjdjMC44LDAuNCwxLjcsMC40LDIuNiwwLjFsMS43LTAuNwoJCQloMy4ybDEuNywwLjdDMjc2LjIsMjQuMSwyNzcuMSwyNC4xLDI3Ny45LDIzLjdMMjc3LjksMjMuN3ogTTI0Ni4yLDI3bDE2LjQsNC45TDI3OSwyN0gyNDYuMnogTTI0NS41LDI5aDAuM2wxNi43LDVsMTYuNy01aDAuMwoJCQljMS43LDAsMywxLjMsMywzcy0xLjMsMy0zLDNoLTM0Yy0xLjcsMC0zLTEuMy0zLTNTMjQzLjksMjksMjQ1LjUsMjl6IE0yNDYuOSwzN2MwLjgsMi40LDMuMSw0LDUuNiw0aDIwYzIuNSwwLDQuOC0xLjYsNS43LTQKCQkJSDI0Ni45eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNTkuNSwyMWMtMS4zLTMuNi00LjctNi04LjUtNmgtNDJjLTMuOCwwLTcuMiwyLjQtOC41LDZjLTMuMywwLjMtNS44LDMuMi01LjUsNi41YzAuMiwyLjksMi42LDUuMiw1LjUsNS41CgkJCWMtMS43LDQuNywwLjgsOS44LDUuNCwxMS41YzEsMC4zLDIsMC41LDMsMC41aDQyYzUsMCw5LTQsOS05YzAtMS0wLjItMi4xLTAuNS0zYzMuMy0wLjMsNS44LTMuMiw1LjUtNi41CgkJCUMxNjQuNywyMy42LDE2Mi40LDIxLjMsMTU5LjUsMjF6IE0xNTEsMTdoLTQyYy0yLjcsMC01LjIsMS42LTYuMyw0aDU0LjdDMTU2LjIsMTguNiwxNTMuNywxNywxNTEsMTd6IE0xNDEuNyw0MwoJCQljMi4xLTEuNywzLjMtNC4zLDMuMy03aC0yYzAsMy45LTMuMSw3LTcsN2gtNC4zYzIuMS0xLjcsMy4zLTQuMywzLjMtN2gtMmMwLDMuOS0zLjEsNy03LDdoLTQuM2MyLjEtMS43LDMuMy00LjMsMy4zLTdoLTIKCQkJYzAsMy45LTMuMSw3LTcsN2gtN2MtMy45LDAtNy0zLjEtNy03czMuMS03LDctN2g0MmMzLjksMCw3LDMuMSw3LDdzLTMuMSw3LTcsN0gxNDEuN3ogTTEwOSwyN2MtMywwLTUuOCwxLjUtNy41LDRIMTAxCgkJCWMtMi4yLDAtNC0xLjgtNC00czEuOC00LDQtNGg1OGMyLjIsMCw0LDEuOCw0LDRzLTEuOCw0LTQsNGgtMC41Yy0xLjctMi41LTQuNS00LTcuNS00SDEwOXoiLz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzksMTE1YzQuNCwwLDgtMy42LDgtOHMtMy42LTgtOC04cy04LDMuNi04LDhTMzQuNiwxMTUsMzksMTE1eiBNNDUsMTA3YzAsMy4zLTIuNyw2LTYsNnMtNi0yLjctNi02CgkJCXMyLjctNiw2LTZTNDUsMTAzLjcsNDUsMTA3eiBNNDIsNzh2LTJoOHYtNkg0MGMtMi4yLDAtNCwxLjgtNCw0djEwSDIybC0xLjMsNEwyMCw5MGgyLjJsMy44LDQwaDI2bDMuOC00MEg1OGwtMC43LTJMNTYsODRINDJWNzh6CgkJCSBNMzgsNzR2MTBoMlY3NGg4di0yaC04QzM4LjksNzIsMzgsNzIuOSwzOCw3NHogTTQwLDg2aDE0LjZsMC43LDJIMjIuOGwwLjctMkg0MHogTTUzLjgsOTBIMjQuMmwzLjYsMzhoMjIuNEw1My44LDkweiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMjksOTJoLTZ2NGgtNnY0aC02djE0aC0zbDAuMiwybDMuOCwzMmgzNmwzLjgtMzJsMC4yLTJoLTN2LTE0aC02di00aC02di00SDEyOXogTTE0NywxMTR2LTEyaC00djRoM3Y4SDE0NwoJCQl6IE0xNDQsMTE0di02aC00djZIMTQ0eiBNMTM4LDEyMHYtMTZoLTR2MTkuMkMxMzUuNiwxMjIuNSwxMzcsMTIxLjQsMTM4LDEyMHogTTEzMiwxMjMuOFYxMDBoLTR2MjMuOAoJCQlDMTI5LjMsMTI0LjEsMTMwLjcsMTI0LjEsMTMyLDEyMy44eiBNMTI2LDEyMy4yVjEwNGgtNHYxNkMxMjMsMTIxLjQsMTI0LjQsMTIyLjUsMTI2LDEyMy4yeiBNMTIwLDExNHYtNmgtNHY2SDEyMHogTTExNCwxMTR2LThoMwoJCQl2LTRoLTR2MTJIMTE0eiBNMTQxLDEwMnYtNGgtNHY0aDN2NGgxVjEwMnogTTEzNSwxMDJ2LThoLTR2NGgzdjRIMTM1eiBNMTI5LDk4di00aC00djhoMXYtNEgxMjl6IE0xMjMsMTAydi00aC00djhoMXYtNEgxMjN6CgkJCSBNMTMwLDEyNmM1LjksMCwxMC45LTQuMiwxMS44LTEwaDcuOWwtMy41LDMwaC0zMi40bC0zLjUtMzBoNy45QzExOS4xLDEyMS44LDEyNC4xLDEyNiwxMzAsMTI2eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMTIsODZ2MmgtNHYtMkgyMTJ6IE0yMTYsODZoLTJ2MmgyVjg2eiBNMTk2LDg2TDE5Niw4NmMtMi43LDAuNy00LjUsMy4zLTMuOSw2YzAuNCwxLjgsMS42LDMuMiwzLjMsMy44CgkJCWwwLjEsMC4ybDEuMSw0LjVjMC4yLDAuOSwxLDEuNSwxLjksMS41bDAsMGw3LDI0LjZjMC4yLDAuOSwxLDEuNCwxLjksMS40aDVjMC45LDAsMS43LTAuNiwxLjktMS40bDctMjQuNmMwLjksMCwxLjctMC42LDEuOS0xLjUKCQkJbDEuMS00LjVsMC4xLTAuMmMyLjYtMC45LDQuMS0zLjcsMy4yLTYuM2MtMC42LTEuNy0yLTMtMy44LTMuM1Y4NmMwLTcuNy02LjMtMTQtMTQtMTRTMTk2LDc4LjMsMTk2LDg2eiBNMjAwLDg2aDZ2MmgtOQoJCQljLTEuNywwLTMsMS4zLTMsM3MxLjMsMywzLDNoMjZjMS43LDAsMy0xLjMsMy0zcy0xLjMtMy0zLTNoLTN2LTJoMmMwLTYuNi01LjQtMTItMTItMTJzLTEyLDUuNC0xMiwxMkgyMDB6IE0xOTguNiwxMDBsLTEtNGgyNC45CgkJCWwtMSw0SDE5OC42eiBNMjA3LjUsMTI2bC02LjktMjRoMTguN2wtNi45LDI0SDIwNy41eiBNMTUwLDI0MmMxMi4yLDAsMjItOS44LDIyLTIycy05LjgtMjItMjItMjJzLTIyLDkuOC0yMiwyMgoJCQlTMTM3LjgsMjQyLDE1MCwyNDJ6IE0xNzQsMjIwYzAsMTMuMy0xMC43LDI0LTI0LDI0cy0yNC0xMC43LTI0LTI0bDAsMGMwLTEzLjMsMTAuNy0yNCwyNC0yNFMxNzQsMjA2LjcsMTc0LDIyMHogTTE0NS42LDIzNy43CgkJCWwyLTAuOWMxLjUtMC42LDMuMi0wLjYsNC43LDBsMiwwLjljMC45LDAuNCwyLDAsMi41LTAuOGwxLjEtMS45YzAuOC0xLjQsMi4yLTIuNCwzLjgtMi44bDIuMS0wLjVjMS0wLjIsMS42LTEuMSwxLjUtMi4xbC0wLjItMi4yCgkJCWMtMC4xLTEuNiwwLjQtMy4yLDEuNC00LjVsMS40LTEuN2MwLjctMC44LDAuNy0xLjksMC0yLjZsLTEuNC0xLjdjLTEuMS0xLjItMS42LTIuOC0xLjQtNC41bDAuMi0yLjJjMC4xLTEtMC42LTEuOS0xLjYtMi4xCgkJCWwtMi4xLTAuNWMtMS42LTAuNC0zLTEuNC0zLjgtMi44bC0xLjEtMS45Yy0wLjUtMC45LTEuNi0xLjItMi41LTAuOGwtMiwwLjljLTEuNSwwLjYtMy4yLDAuNi00LjcsMGwtMi0wLjljLTAuOS0wLjQtMiwwLTIuNSwwLjgKCQkJbC0xLDIuMWMtMC44LDEuNC0yLjIsMi40LTMuOCwyLjhsLTIuMSwwLjVjLTEsMC4yLTEuNiwxLjEtMS41LDIuMWwwLjIsMi4yYzAuMSwxLjYtMC40LDMuMi0xLjQsNC41bC0xLjQsMS43CgkJCWMtMC43LDAuOC0wLjcsMS45LDAsMi42bDEuNCwxLjdjMS4xLDEuMiwxLjYsMi44LDEuNCw0LjVsLTAuMiwyLjJjLTAuMSwxLDAuNiwxLjksMS42LDIuMWwyLjEsMC41YzEuNiwwLjQsMywxLjQsMy44LDIuOGwxLjEsMS45CgkJCUMxNDMuNiwyMzcuOCwxNDQuNywyMzguMSwxNDUuNiwyMzcuN0wxNDUuNiwyMzcuN3ogTTE0OC40LDIzOC43YzEtMC40LDIuMS0wLjQsMy4xLDBsMiwwLjljMS44LDAuOCw0LDAuMSw1LTEuNmwxLjEtMS45CgkJCWMwLjYtMC45LDEuNS0xLjYsMi41LTEuOGwyLjEtMC41YzEuOS0wLjQsMy4zLTIuMywzLjEtNC4ybC0wLjItMi4yYy0wLjEtMS4xLDAuMy0yLjIsMS0zbDEuNC0xLjdjMS4zLTEuNSwxLjMtMy43LDAtNS4ybC0xLjQtMS43CgkJCWMtMC43LTAuOC0xLjEtMS45LTEtM2wwLjItMi4yYzAuMi0yLTEuMS0zLjgtMy4xLTQuMmwtMi4xLTAuNWMtMS4xLTAuMi0yLTAuOS0yLjUtMS44bC0xLjEtMS45Yy0xLTEuNy0zLjItMi40LTUtMS42bC0yLDAuOQoJCQljLTEsMC40LTIuMSwwLjQtMy4xLDBsLTItMC45Yy0xLjgtMC44LTQtMC4xLTUsMS42bC0xLjEsMS45Yy0wLjYsMC45LTEuNSwxLjYtMi41LDEuOGwtMi4xLDAuNWMtMS45LDAuNC0zLjMsMi4zLTMuMSw0LjJsMC4yLDIuMgoJCQljMC4xLDEuMS0wLjMsMi4yLTEsM2wtMS40LDEuN2MtMS4zLDEuNS0xLjMsMy43LDAsNS4ybDEuNCwxLjdjMC43LDAuOCwxLjEsMS45LDEsM2wtMC4yLDIuMmMtMC4yLDIsMS4xLDMuOCwzLjEsNC4ybDIuMSwwLjUKCQkJYzEuMSwwLjIsMiwwLjksMi41LDEuOGwxLjEsMS45YzEsMS43LDMuMiwyLjQsNSwxLjZMMTQ4LjQsMjM4Ljd6IE0xNTIsMjA3YzAtMC42LDAuNC0xLDEtMXMxLDAuNCwxLDFzLTAuNCwxLTEsMQoJCQlTMTUyLDIwNy42LDE1MiwyMDd6IE0xNTgsMjA5YzAtMC42LDAuNC0xLDEtMXMxLDAuNCwxLDFzLTAuNCwxLTEsMVMxNTgsMjA5LjYsMTU4LDIwOXogTTE0NywyMTBjMC0wLjYsMC40LTEsMS0xczEsMC40LDEsMQoJCQlzLTAuNCwxLTEsMVMxNDcsMjEwLjYsMTQ3LDIxMHogTTE0MSwyMTBjMC0wLjYsMC40LTEsMS0xczEsMC40LDEsMXMtMC40LDEtMSwxUzE0MSwyMTAuNiwxNDEsMjEweiBNMTQ0LDIwNWMwLTAuNiwwLjQtMSwxLTEKCQkJczEsMC40LDEsMXMtMC40LDEtMSwxUzE0NCwyMDUuNiwxNDQsMjA1eiBNMTM2LDIxM2MwLTAuNiwwLjQtMSwxLTFzMSwwLjQsMSwxcy0wLjQsMS0xLDFTMTM2LDIxMy42LDEzNiwyMTN6IE0xMzksMjE5CgkJCWMwLTAuNiwwLjQtMSwxLTFzMSwwLjQsMSwxcy0wLjQsMS0xLDFTMTM5LDIxOS42LDEzOSwyMTl6IE0xMzksMjI1YzAtMC42LDAuNC0xLDEtMXMxLDAuNCwxLDFzLTAuNCwxLTEsMVMxMzksMjI1LjYsMTM5LDIyNXoKCQkJIE0xNDMsMjMyYzAtMC42LDAuNC0xLDEtMXMxLDAuNCwxLDFzLTAuNCwxLTEsMVMxNDMsMjMyLjYsMTQzLDIzMnogTTE0OCwyMzBjMC0wLjYsMC40LTEsMS0xczEsMC40LDEsMXMtMC40LDEtMSwxCgkJCVMxNDgsMjMwLjYsMTQ4LDIzMHogTTE1MywyMzRjMC0wLjYsMC40LTEsMS0xczEsMC40LDEsMXMtMC40LDEtMSwxUzE1MywyMzQuNiwxNTMsMjM0eiBNMTU3LDIyOGMwLTAuNiwwLjQtMSwxLTFzMSwwLjQsMSwxCgkJCXMtMC40LDEtMSwxUzE1NywyMjguNiwxNTcsMjI4eiBNMTYzLDIyNGMwLTAuNiwwLjQtMSwxLTFzMSwwLjQsMSwxcy0wLjQsMS0xLDFTMTYzLDIyNC42LDE2MywyMjR6IE0xNTksMjIxYzAtMC42LDAuNC0xLDEtMQoJCQlzMSwwLjQsMSwxcy0wLjQsMS0xLDFTMTU5LDIyMS42LDE1OSwyMjF6IE0xNjMsMjE4YzAtMC42LDAuNC0xLDEtMXMxLDAuNCwxLDFzLTAuNCwxLTEsMVMxNjMsMjE4LjYsMTYzLDIxOHogTTE1OCwyMTQKCQkJYzAtMC42LDAuNC0xLDEtMXMxLDAuNCwxLDFzLTAuNCwxLTEsMVMxNTgsMjE0LjYsMTU4LDIxNHogTTEzNCwyMjBjMC0wLjYsMC40LTEsMS0xczEsMC40LDEsMXMtMC40LDEtMSwxUzEzNCwyMjAuNiwxMzQsMjIwegoJCQkgTTE1MCwyMjVjMi44LDAsNS0yLjIsNS01cy0yLjItNS01LTVzLTUsMi4yLTUsNVMxNDcuMiwyMjUsMTUwLDIyNXogTTE1NywyMjBjMCwzLjktMy4xLDctNyw3cy03LTMuMS03LTdzMy4xLTcsNy03CgkJCVMxNTcsMjE2LjEsMTU3LDIyMHogTTI0MywxOTFjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFoMmMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMUgyNDN6IE0yNjIsMjAwYzAtMC42LDAuNC0xLDEtMWgyCgkJCWMwLjYsMCwxLDAuNCwxLDFzLTAuNCwxLTEsMWgtMkMyNjIuNCwyMDEsMjYyLDIwMC42LDI2MiwyMDB6IE0yNDgsMjA1Yy0wLjYsMC0xLDAuNC0xLDFzMC40LDEsMSwxaDJjMC42LDAsMS0wLjQsMS0xcy0wLjQtMS0xLTEKCQkJSDI0OHogTTIyMywyMDZjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFoMmMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMUgyMjN6IE0yMjgsMjEwYy0wLjYsMC0xLDAuNC0xLDFzMC40LDEsMSwxaDIKCQkJYzAuNiwwLDEtMC40LDEtMXMtMC40LTEtMS0xSDIyOHogTTIzNywyMTBjMC0wLjYsMC40LTEsMS0xaDJjMC42LDAsMSwwLjQsMSwxcy0wLjQsMS0xLDFoLTJDMjM3LjQsMjExLDIzNywyMTAuNiwyMzcsMjEwegoJCQkgTTI1MiwyMTFjMC0wLjYsMC40LTEsMS0xaDJjMC42LDAsMSwwLjQsMSwxcy0wLjQsMS0xLDFoLTJDMjUyLjQsMjEyLDI1MiwyMTEuNiwyNTIsMjExeiBNMjY0LDIwOWMtMC42LDAtMSwwLjQtMSwxczAuNCwxLDEsMWgyCgkJCWMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMUgyNjR6IE0yNTMsMTk1YzAtMC42LDAuNC0xLDEtMWgyYzAuNiwwLDEsMC40LDEsMXMtMC40LDEtMSwxaC0yQzI1My40LDE5NiwyNTMsMTk1LjYsMjUzLDE5NXoKCQkJIE0yMzQsMTk1Yy0wLjYsMC0xLDAuNC0xLDFzMC40LDEsMSwxaDJjMC42LDAsMS0wLjQsMS0xcy0wLjQtMS0xLTFIMjM0eiBNMjQwLDIwMGMwLTAuNiwwLjQtMSwxLTFoMmMwLjYsMCwxLDAuNCwxLDFzLTAuNCwxLTEsMQoJCQloLTJDMjQwLjQsMjAxLDI0MCwyMDAuNiwyNDAsMjAweiBNMjE1LDIxNWMwLTAuNSwwLTAuOSwwLTEuNGMtMi41LTEuMS0zLjctNC0yLjYtNi42YzAuMi0wLjUsMC41LTEsMC45LTEuNGMtMC45LTIsMC00LjIsMS45LTUuMgoJCQljLTAuOC0yLjYsMC43LTUuNCwzLjQtNi4ybDAsMGMwLjQtMC41LDAuOS0wLjksMS41LTEuMWMwLjUtMi43LDMuMS00LjUsNS44LTQuMWMwLjcsMC4xLDEuNCwwLjQsMiwwLjhjNS4zLTMuOCwxMS42LTUuOSwxOC4yLTUuOQoJCQljNi44LDAsMTMuMSwyLjIsMTguMiw1LjljMi4zLTEuNiw1LjQtMSw3LDEuM2MwLjQsMC42LDAuNywxLjMsMC44LDJjMC42LDAuMiwxLjEsMC42LDEuNSwxLjFjMi43LDAuOCw0LjIsMy41LDMuNCw2LjJsMCwwCgkJCWMxLjksMSwyLjcsMy4yLDEuOSw1LjJjMS45LDIsMS44LDUuMi0wLjIsN2MtMC40LDAuNC0wLjksMC43LTEuNSwxYzAsMC41LDAsMC45LDAsMS40djFoLTYydi0xSDIxNXogTTIxNS44LDIwNy44CgkJCWMtMC4zLDEuMi0wLjUsMi40LTAuNiwzLjZjLTEuMy0xLTEuNi0yLjktMC42LTQuMmwwLDBDMjE1LDIwNy41LDIxNS40LDIwNy43LDIxNS44LDIwNy44TDIxNS44LDIwNy44eiBNMjE3LjMsMjAzLjIKCQkJYy0wLjQsMC45LTAuNywxLjgtMSwyLjdjLTEtMC40LTEuNi0xLjUtMS4zLTIuNWMwLjItMC41LDAuNi0wLjksMS4xLTEuMkMyMTYuNSwyMDIuNiwyMTYuOSwyMDIuOSwyMTcuMywyMDMuMkwyMTcuMywyMDMuMnoKCQkJIE0yMTkuNiwxOTguN2MtMC41LDAuOS0xLDEuOC0xLjUsMi43Yy0xLjMtMS0xLjUtMi45LTAuNS00LjJjMC4xLTAuMiwwLjMtMC4zLDAuNC0wLjVDMjE4LjMsMTk3LjYsMjE4LjksMTk4LjMsMjE5LjYsMTk4LjcKCQkJTDIxOS42LDE5OC43eiBNMjIwLjgsMTk3YzAuNC0wLjUsMC43LTEsMS4xLTEuNWMtMC4zLTAuNS0wLjktMC43LTEuNC0wLjRzLTAuNywwLjktMC40LDEuNEMyMjAuMywxOTYuNywyMjAuNSwxOTYuOSwyMjAuOCwxOTcKCQkJTDIyMC44LDE5N3ogTTIyNi4xLDE5MS4yYy0xLDAuOS0yLDEuOC0yLjksMi44Yy0wLjMtMC4zLTAuNy0wLjYtMS4xLTAuOGMwLjQtMS42LDIuMS0yLjUsMy43LTIuMQoJCQlDMjI1LjksMTkxLjEsMjI2LDE5MS4yLDIyNi4xLDE5MS4yTDIyNi4xLDE5MS4yeiBNMjY4LjgsMTk0Yy0wLjktMS0xLjktMS45LTIuOS0yLjhjMS41LTAuNiwzLjMsMC4xLDMuOSwxLjcKCQkJYzAsMC4xLDAuMSwwLjIsMC4xLDAuM0MyNjkuNSwxOTMuNCwyNjkuMSwxOTMuNiwyNjguOCwxOTRMMjY4LjgsMTk0eiBNMjcwLjEsMTk1LjVjMC40LDAuNSwwLjgsMSwxLjEsMS40CgkJCWMwLjUtMC4xLDAuOS0wLjcsMC44LTEuMnMtMC43LTAuOS0xLjItMC44QzI3MC41LDE5NS4xLDI3MC4zLDE5NS4zLDI3MC4xLDE5NS41eiBNMjczLjksMjAxLjRjLTAuNS0wLjktMS0xLjgtMS41LTIuNwoJCQljMC44LTAuNCwxLjQtMS4xLDEuNi0yYzEuMywxLjEsMS40LDMsMC40LDQuMkMyNzQuMiwyMDEuMSwyNzQsMjAxLjIsMjczLjksMjAxLjR6IE0yNzUuNiwyMDUuOWMtMC4zLTAuOS0wLjYtMS44LTEtMi43CgkJCWMwLjQtMC4zLDAuOC0wLjYsMS4yLTFjMSwwLjUsMS40LDEuNywxLDIuN0MyNzYuNiwyMDUuMywyNzYuMiwyMDUuNywyNzUuNiwyMDUuOXogTTI3Ni44LDIxMS40Yy0wLjEtMS4yLTAuNC0yLjQtMC42LTMuNgoJCQljMC41LTAuMSwwLjktMC40LDEuMi0wLjZDMjc4LjQsMjA4LjUsMjc4LjEsMjEwLjQsMjc2LjgsMjExLjRMMjc2LjgsMjExLjRMMjc2LjgsMjExLjR6IE0yNzUsMjE0Yy0wLjUtMTYtMTMuOS0yOC42LTI5LjktMjguMQoJCQljLTE1LjMsMC41LTI3LjYsMTIuOC0yOC4xLDI4LjFIMjc1TDI3NSwyMTR6IE03Mi4zLDE5OC4xYy0wLjItMC4zLTAuMy0wLjctMC4zLTEuMXYtMTJoLTJ2MTJjMCwyLjIsMS44LDQsNCw0CgkJCWMxLjIsMCwyLjMtMC41LDMuMS0xLjRjMC42LTAuNywwLjktMS42LDAuOS0yLjV2LTEyaC0ydjEyYzAsMS4xLTAuOSwyLTIsMmwwLDBDNzMuMywxOTksNzIuNywxOTguNyw3Mi4zLDE5OC4xeiBNNzUsMTc2CgkJCWMwLjQsMCwwLjcsMCwxLjEtMC4xYzAuNSwyLjIsMi42LDMuNSw0LjgsM2MwLjUtMC4xLDEtMC4zLDEuNC0wLjZjMS4xLDIuMSwxLjcsNC40LDEuNyw2Ljd2MjRjMCwzLjMtMi43LDYtNiw2aC0zdjkKCQkJYzAsMi44LTIuMiw1LTUsNXMtNS0yLjItNS01di05aC0zYy0zLjMsMC02LTIuNy02LTZ2LTI0YzAtNy43LDYuMy0xNCwxNC0xNEM3MCwxNzMuOCw3Mi4yLDE3Niw3NSwxNzZ6IE01OCwxOTF2MTIKCQkJYzAsMC44LDAuNSwxLjUsMS4yLDEuOGMwLjksMC40LDEuOSwwLjEsMi40LTAuN2MwLjItMC4zLDAuMy0wLjcsMC4zLTEuMXYtMTJoMnYxMmMwLDIuMi0xLjcsNC0zLjksNGMtMC41LDAtMS0wLjEtMS40LTAuMgoJCQljLTAuMi0wLjEtMC40LTAuMi0wLjctMC4zdjIuNWMwLDIuMiwxLjgsNCw0LDRoMTZjMi4yLDAsNC0xLjgsNC00di0yNGMwLTEuNS0wLjItMi45LTAuNy00LjJjLTAuNCwwLjEtMC45LDAuMi0xLjMsMC4yCgkJCWMtMi4xLDAtNC4xLTEuMS01LjItM2MtMy0wLjEtNS42LTItNi41LTQuOUM2Mi40LDE3NCw1OCwxNzksNTgsMTg1VjE5MXogTTY3LDIxNXY5YzAsMS43LDEuMywzLDMsM3MzLTEuMywzLTN2LTlINjd6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTS0xNywxOTFjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFoMmMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMUgtMTd6IE0yLDIwMGMwLTAuNiwwLjQtMSwxLTFoMgoJCQljMC42LDAsMSwwLjQsMSwxcy0wLjQsMS0xLDFIM0MyLjQsMjAxLDIsMjAwLjYsMiwyMDB6IE0tMTIsMjA1Yy0wLjYsMC0xLDAuNC0xLDFzMC40LDEsMSwxaDJjMC42LDAsMS0wLjQsMS0xcy0wLjQtMS0xLTFILTEyegoJCQkgTS0zNywyMDZjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFoMmMwLjYsMCwxLTAuNCwxLTFzLTAuNC0xLTEtMUgtMzd6IE0tMzIsMjEwYy0wLjYsMC0xLDAuNC0xLDFzMC40LDEsMSwxaDJjMC42LDAsMS0wLjQsMS0xCgkJCXMtMC40LTEtMS0xSC0zMnogTS0yMywyMTBjMC0wLjYsMC40LTEsMS0xaDJjMC42LDAsMSwwLjQsMSwxcy0wLjQsMS0xLDFoLTJDLTIyLjYsMjExLTIzLDIxMC42LTIzLDIxMHogTS04LDIxMWMwLTAuNiwwLjQtMSwxLTEKCQkJaDJjMC42LDAsMSwwLjQsMSwxcy0wLjQsMS0xLDFoLTJDLTcuNiwyMTItOCwyMTEuNi04LDIxMXogTTQsMjA5Yy0wLjYsMC0xLDAuNC0xLDFzMC40LDEsMSwxaDJjMC42LDAsMS0wLjQsMS0xcy0wLjQtMS0xLTFINHoKCQkJIE0tNywxOTVjMC0wLjYsMC40LTEsMS0xaDJjMC42LDAsMSwwLjQsMSwxcy0wLjQsMS0xLDFoLTJDLTYuNiwxOTYtNywxOTUuNi03LDE5NXogTS0yNiwxOTVjLTAuNiwwLTEsMC40LTEsMXMwLjQsMSwxLDFoMgoJCQljMC42LDAsMS0wLjQsMS0xcy0wLjQtMS0xLTFILTI2eiBNLTIwLDIwMGMwLTAuNiwwLjQtMSwxLTFoMmMwLjYsMCwxLDAuNCwxLDFzLTAuNCwxLTEsMWgtMkMtMTkuNiwyMDEtMjAsMjAwLjYtMjAsMjAweiBNLTQ1LDIxNQoJCQljMC0wLjUsMC0wLjksMC0xLjRjLTIuNS0xLjEtMy43LTQtMi42LTYuNmMwLjItMC41LDAuNS0xLDAuOS0xLjRjLTAuOS0yLDAtNC4yLDEuOS01LjJjLTAuOC0yLjYsMC43LTUuNCwzLjQtNi4ybDAsMAoJCQljMC40LTAuNSwwLjktMC45LDEuNS0xLjFjMC41LTIuNywzLjEtNC41LDUuOC00LjFjMC43LDAuMSwxLjQsMC40LDIsMC44YzUuMy0zLjgsMTEuNi01LjksMTguMi01LjljNi44LDAsMTMuMSwyLjIsMTguMiw1LjkKCQkJYzIuMy0xLjYsNS40LTEsNywxLjNjMC40LDAuNiwwLjcsMS4zLDAuOCwyYzAuNiwwLjIsMS4xLDAuNiwxLjUsMS4xYzIuNywwLjgsNC4yLDMuNSwzLjQsNi4ybDAsMGMxLjksMSwyLjcsMy4yLDEuOSw1LjIKCQkJYzEuOSwyLDEuOCw1LjItMC4yLDdjLTAuNCwwLjQtMC45LDAuNy0xLjUsMWMwLDAuNSwwLDAuOSwwLDEuNHYxaC02MnYtMUgtNDV6IE0tNDQuMiwyMDcuOGMtMC4zLDEuMi0wLjUsMi40LTAuNiwzLjYKCQkJYy0xLjMtMS0xLjYtMi45LTAuNi00LjJsMCwwQy00NSwyMDcuNS00NC42LDIwNy43LTQ0LjIsMjA3LjhMLTQ0LjIsMjA3Ljh6IE0tNDIuNywyMDMuMmMtMC40LDAuOS0wLjcsMS44LTEsMi43CgkJCWMtMS0wLjQtMS42LTEuNS0xLjMtMi41YzAuMi0wLjUsMC42LTAuOSwxLjEtMS4yQy00My41LDIwMi42LTQzLjEsMjAyLjktNDIuNywyMDMuMkwtNDIuNywyMDMuMnogTS00MC40LDE5OC43CgkJCWMtMC41LDAuOS0xLDEuOC0xLjUsMi43Yy0xLjMtMS0xLjUtMi45LTAuNS00LjJjMC4xLTAuMiwwLjMtMC4zLDAuNC0wLjVDLTQxLjcsMTk3LjYtNDEuMSwxOTguMy00MC40LDE5OC43eiBNLTM5LjIsMTk3CgkJCWMwLjMtMC41LDAuNy0xLDEuMS0xLjVjLTAuMy0wLjUtMC45LTAuNy0xLjQtMC40cy0wLjcsMC45LTAuNCwxLjRDLTM5LjcsMTk2LjctMzkuNSwxOTYuOS0zOS4yLDE5N0wtMzkuMiwxOTd6IE0tMzMuOSwxOTEuMgoJCQljLTEsMC45LTIsMS44LTIuOSwyLjhjLTAuMy0wLjMtMC43LTAuNi0xLjEtMC44YzAuNC0xLjYsMi4xLTIuNSwzLjctMi4xQy0zNC4xLDE5MS4xLTM0LDE5MS4yLTMzLjksMTkxLjJMLTMzLjksMTkxLjJ6IE04LjgsMTk0CgkJCWMtMC45LTEtMS45LTEuOS0yLjktMi44YzEuNS0wLjYsMy4zLDAuMSwzLjksMS43YzAsMC4xLDAuMSwwLjIsMC4xLDAuM0M5LjUsMTkzLjQsOS4xLDE5My42LDguOCwxOTRMOC44LDE5NHogTTEwLjEsMTk1LjUKCQkJYzAuNCwwLjUsMC44LDEsMS4xLDEuNGMwLjUtMC4xLDAuOS0wLjcsMC44LTEuMmMtMC4xLTAuNS0wLjctMC45LTEuMi0wLjhDMTAuNSwxOTUuMSwxMC4zLDE5NS4zLDEwLjEsMTk1LjV6IE0xMy45LDIwMS40CgkJCWMtMC41LTAuOS0wLjktMS44LTEuNS0yLjdjMC44LTAuNCwxLjQtMS4xLDEuNi0yYzEuMywxLjEsMS40LDMsMC40LDQuMkMxNC4yLDIwMS4xLDE0LDIwMS4yLDEzLjksMjAxLjR6IE0xNS43LDIwNS45CgkJCWMtMC4zLTAuOS0wLjYtMS44LTEtMi43YzAuNC0wLjMsMC44LTAuNiwxLjItMWMxLDAuNSwxLjQsMS43LDEsMi43QzE2LjYsMjA1LjMsMTYuMiwyMDUuNywxNS43LDIwNS45eiBNMTYuOCwyMTEuNAoJCQljLTAuMS0xLjItMC40LTIuNC0wLjYtMy42YzAuNS0wLjEsMC45LTAuNCwxLjItMC42QzE4LjQsMjA4LjUsMTguMSwyMTAuNCwxNi44LDIxMS40TDE2LjgsMjExLjRMMTYuOCwyMTEuNHogTTE1LDIxNAoJCQljLTAuNS0xNi0xMy45LTI4LjYtMjkuOS0yOC4xYy0xNS4zLDAuNS0yNy42LDEyLjgtMjguMSwyOC4xSDE1TDE1LDIxNHoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K";

/***/ })

}]);