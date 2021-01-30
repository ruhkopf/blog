{"1":function(container,depth0,helpers,partials,data) {
    var lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li>"
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li>"
    + alias1(container.lambda((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + " <br/><span class=\"subtle-sidebar\">"
    + alias1(lookupProperty(helpers,"breaklines").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"desc") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":52,"column":60},"end":{"line":52,"column":81}}}))
    + "</span></li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <li>"
    + alias1(container.lambda((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + " <br/><span class=\"subtle-sidebar\">"
    + alias1(lookupProperty(helpers,"breaklines").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"desc") : depth0),{"name":"breaklines","hash":{},"data":data,"loc":{"start":{"line":62,"column":58},"end":{"line":62,"column":79}}}))
    + "</span></li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "      <li><span class=\"highlight\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"title") : depth0), depth0))
    + "</span> &mdash; "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"desc") : depth0), depth0))
    + "</li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"profile-experience"),depth0,{"name":"profile-experience","hash":{"experience":depth0},"data":data,"indent":"      ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"profile-experience"),depth0,{"name":"profile-experience","hash":{"experience":depth0},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row\">\n  <div class=\"column-sidebar\">\n\n    <div class=\"sidebar-header\">\n      <h1>\n        <i class=\"fas fa-user\"></i>\n        "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"name") : stack1), depth0))
    + "\n      </h1>\n      <h2>"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"role") : stack1), depth0))
    + "</h2>\n    </div>\n    <div class=\"sidebar-contact\">\n      <ul class=\"list-unstyled\">\n        <li><i class=\"fas fa-envelope mr-05\"></i>\n        <a href=\"mailto:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"email") : stack1), depth0))
    + "</a>\n        </li>\n        <li><i class=\"fas fa-phone mr-05\"></i>\n        <a href=\"tel:"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"phone") : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"phone") : stack1), depth0))
    + "</a>\n        </li>\n        <li><i class=\"fab fa-linkedin mr-05\"></i>\n        <a href=\"https://linkedin.com/in/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"linkedin") : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"linkedin") : stack1), depth0))
    + "</a>\n        </li>\n        <li><i class=\"fab fa-github mr-05\"></i>\n        <a href=\"https://github.com/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"github") : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"github") : stack1), depth0))
    + "</a>\n        </li>\n        <li><i class=\"fab fa-blogger-b mr-05\"></i>\n          <a href=\"https://"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"blog") : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"blog") : stack1), depth0))
    + "</a>\n        </li>  \n        <li><i class=\"fab fa-twitter mr-05\"></i>\n        <a href=\"https://twitter.com/"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"twitter") : stack1), depth0))
    + "\" target=\"_blank\">"
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"twitter") : stack1), depth0))
    + "</a>\n        </li>\n      </ul>\n\n    </div>\n\n    <div class=\"sidebar-content\">\n      <h2>\n        <i class=\"fas fa-certificate\"></i>\n        Certifications\n      </h2>\n      <ul class=\"list-unstyled\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"certifications") : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":41,"column":8},"end":{"line":43,"column":17}}})) != null ? stack1 : "")
    + "      </ul>\n\n      <h2>\n        <i class=\"fas fa-graduation-cap\"></i>\n        Education\n      </h2>\n      <ul class=\"list-unstyled\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"education") : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":51,"column":10},"end":{"line":53,"column":19}}})) != null ? stack1 : "")
    + "      </ul>\n      \n       <h2>\n        <i class=\"fas fa-rocket\"></i>\n        Freelance / Side\n      </h2>\n      <ul class=\"list-unstyled dense\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"freelance") : stack1),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":61,"column":8},"end":{"line":63,"column":17}}})) != null ? stack1 : "")
    + "      </ul>\n\n    </div>\n\n  </div>\n  <div class=\"column-main\">\n    <h2>\n      <i class=\"fas fa-flask\"></i>\n      Skills\n    </h2>\n    <ul class=\"list-unstyled dense\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"skills") : stack1),{"name":"each","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":75,"column":6},"end":{"line":77,"column":15}}})) != null ? stack1 : "")
    + "    </ul>\n\n    <h2>\n      <i class=\"fas fa-user-tie\"></i>\n      Professional Experience\n    </h2>\n\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"recentExperiences") : stack1),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":85,"column":4},"end":{"line":87,"column":13}}})) != null ? stack1 : "")
    + "\n    <div id=\"read-more-content\" class=\"hidden\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias3,((stack1 = (depth0 != null ? lookupProperty(depth0,"profile") : depth0)) != null ? lookupProperty(stack1,"moreExperiences") : stack1),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":90,"column":6},"end":{"line":92,"column":15}}})) != null ? stack1 : "")
    + "    </div>\n\n    <button id=\"read-more-button\" class=\"light-button\" onclick=\"toggleReadmore()\">Show more...</button>\n\n  </div>\n</div>\n";
},"usePartial":true,"useData":true}